import React from "react";
import styled from "styled-components";

import MainVideoPlayer from "../MainVideoPlayer";

const VideoSection: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <MainVideoPlayer src={"/example.mp4"} type={"video/mp4"} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 50rem;
  height: 20rem;
  margin: 9rem 0 0 0;
`;

export default VideoSection;
