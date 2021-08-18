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
    <VideoPlayer autoPlay muted loop>
      <source src={src} type={type} />
    </VideoPlayer>
  );
};

const VideoPlayer = styled.video`
  width: 34rem;
  margin: 4.2rem 0 0 -12.5rem;
  position: absolute;
  z-index: -1;
`;

export default MainVideoPlayer;
