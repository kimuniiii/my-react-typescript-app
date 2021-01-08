// import { PreviewImage } from './PreviewImage';
import { useDropzone } from 'react-dropzone';
import React from 'react';
import styled from 'styled-components';

export const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    noDrag: true,
  });

  //TODO 要件通りに画像のPreview表示をさせることができるように変更する
  // const fileList = acceptedFiles.map((file) => {
  //   return URL.createObjectURL(file);
  // });

  // const previewUrl = fileList[0];

  return (
    <StyledContainer>
      <StyledBase {...getRootProps()}>
        <input {...getInputProps()} />
        <StyledText>ファイルを選択してください</StyledText>
      </StyledBase>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBase = styled.div`
  position: relative;
  border: 2px dashed gray;
  cursor: pointer;
  width: 1200px;
`;

const StyledText = styled.p`
  font-size: 8px;
  text-align: center;
  line-height: 100px;
`;
