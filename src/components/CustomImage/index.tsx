import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

interface ImageProps {
  alt: string;
  src: StaticImageData;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt }): React.ReactElement => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90%;
  margin: 0.5rem 0.3rem;
`;

export default CustomImage;
