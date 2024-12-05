import { authAPI } from '../customApi';

export const activityTicketApi = async () => {
  const data = await authAPI.get('/voucher-members');
  return data;
};

export const myNeighborsApi = async () => {
  const data = await authAPI.get('/voucher-members/my-current-crews');
  return data;
};

export const pastCrewsApi = async () => {
  const data = await authAPI.get('/voucher-members/my-past-crews', {
    params: {
      page: 0,
      fetchSize: 5,
    },
  });
  return data;
};

export const trendingTicketsApi = async () => {
  const data = await authAPI.get('/sport-voucher/popularity', {
    params: {
      fetchSize: 3,
    },
  });
  return data;
};

export const myAddressesApi = async () => {
  const data = await authAPI.get('/addresses');
  return data;
};

export const crewInfoApi = async (crewId: number) => {
  const data = await authAPI.get(`/crews/${crewId}`);
  return data;
};

export const trendingChartApi = async () => {
  const data = await authAPI.get('/sport-voucher/past-popularity');
  return data;
};

export const myPageUserDateApi = async () => {
  const data = await authAPI.get('/members');
  return data;
};
