import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>styled componentsです</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #000;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: red; /* 色名指定での変更も問題なくできる */
`;
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: blue;
    cursor: pointer;
  }
`;
