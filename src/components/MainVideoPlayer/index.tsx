import React from "react";
import styled from "styled-components";

interface MainVideoPlayerProps {
  src: string;
  type: string;
}

const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({
  src,
  type,
}): React.ReactElement => {
  return (
    <VideoPlayer autoPlay muted>
      <source src={src} type={type} />
    </VideoPlayer>
  );
};

const VideoPlayer = styled.video`
  width: 43rem;
`;

export default MainVideoPlayer;
