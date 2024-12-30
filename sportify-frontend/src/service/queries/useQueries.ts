import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";


export const useQueries = (
  queryKey: string | string[],
  apis: {
    [key: string]: (params?: string | number | { [key: string]: any }) => Promise<AxiosResponse>;
  },
  queryOptions? : {},
  params?: any[]
) => {
  const [errorCode, setErrorCode] = useState<any[]>([]);

  const fetchQueries = async () => {
    const apiKeys = Object.keys(apis);

    const results = await Promise.allSettled(
      apiKeys.map((key, i) => {
        const param = params?.[i]; // 각 API에 전달할 파라미터
        return param ? apis[key](param) : apis[key]();
      })
    );

    const resultList: [string, any][] = [];
    const errorCodes: any[] = [];

    results.forEach((result, i) => {
      const key = apiKeys[i]; // 현재 API의 키

      console.log(result)
      if (result.status === "fulfilled"){
        const response = result.value;
        resultList.push([key, response.data]);
      }
      else if(result.status === 'rejected') {
        errorCodes.push(result.reason?.response); 
      }
    });

    setErrorCode(errorCodes); // 에러 코드를 상태로 저장
    return Object.fromEntries(resultList); // 정상적인 데이터 반환
  };

  const queryResult = useQuery({
    queryKey,
    queryFn: fetchQueries, 
    queryOptions // React Query 옵션

  });

  return { ...queryResult, errorCode };
};
