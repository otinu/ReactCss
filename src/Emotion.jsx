/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  //  scssの書き方
  const containerStyle = css`
    border: solid 1px #000;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  //  インラインスタイルの書き方
  //  キャメルや文字列で値を書くことに注意
  const titleStyle = css({
    margin: 0,
    color: "#aaa"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <SButton>ボタン</SButton>
    </div>
  );
};

//  styled-componentsの書き方
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: green;
    cursor: pointer;
  }
`;
