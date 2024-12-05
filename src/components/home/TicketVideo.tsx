import React from 'react';
import { Title } from '../ui';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

const TicketVideo = () => {
  const disabled = localStorage.getItem('disabled');
  return (
    <TicketVideoContainer>
      {' '}
      <Title title="이용권은 어떻게 써요?" color={true} />
      <VideoContainer>
        <YouTubeContainer>
          <YouTube
            videoId={disabled ? `EaFcitHr8NA` : `kGlhSM_KYA4`}
            opts={{
              width: '328px',
              height: '184px',

              playerVars: {
                autoplay: 0, //자동재생 X
                rel: 0, //관련 동영상 표시하지 않음
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              },
            }}
            //이벤트 리스너
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </YouTubeContainer>
        <LinkBtn
          to={`https://www.youtube.com/watch?v=${disabled ? `EaFcitHr8NA` : `kGlhSM_KYA4`}`}
          target="_blank"
        >
          유튜브 영상 더보기
        </LinkBtn>
      </VideoContainer>
    </TicketVideoContainer>
  );
};

export default TicketVideo;

const TicketVideoContainer = styled.div`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YouTubeContainer = styled.div`
  width: 328px;
  height: 184px;
  display: flex;
  overflow: hidden; /* 테두리 안쪽으로 자르기 */
  justify-content: center;
  border-radius: 0.8rem;
  background-color: antiquewhite;
`;

const LinkBtn = styled(Link)`
  display: flex;
  margin-top: 1.6rem;
  width: 328px;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--brandColor);

  color: var(--white);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
