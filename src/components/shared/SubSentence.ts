import styled from "styled-components";

const SubSentence = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 0.2rem;
  color: ${({ theme }) => theme.MainGray};
`;

export default SubSentence;
