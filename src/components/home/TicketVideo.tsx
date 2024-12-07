import styled from 'styled-components';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

import { Title } from '../ui';

const TicketVideo = () => {
  const disabled = localStorage.getItem('disabled');
  return (
    <TicketVideoContainer>
      {' '}
      <Title title="이용권은 어떻게 사용하나요?" color={true} />
      <VideoContainer>
        <YouTubeContainer>
          <YouTube
            videoId={disabled ? `kGlhSM_KYA4` : `EaFcitHr8NA`}
            opts={{
              width: '100%',
              height: '196px',

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
          to={`https://www.youtube.com/@kspo88`}
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
  width: 100%;
  height: auto;
  overflow: hidden; /* 테두리 안쪽으로 자르기 */
  border-radius: 8px;

  iframe {
    display: block; /* iframe에 스타일 적용 */
  }
`;

const LinkBtn = styled(Link)`
  display: flex;
  margin-top: 1.6rem;
  width: 100%;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--brandColor);

  color: var(--white);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;
