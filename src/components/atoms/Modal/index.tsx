import { Button } from 'components/atoms/Button';
import { Checkbox } from 'components/atoms/Checkbox';
import { TextInput } from 'components/atoms/TextInput';
import { Toggle } from 'components/atoms/Toggle';
import React, { FC } from 'react';
import styled from 'styled-components';

export const BasicModal: FC = () => {
  return (
    <>
      <StyledModalBase>
        <StyledInputContainer>
          <div>名前</div>
          <TextInput />
        </StyledInputContainer>
        <StyledCheckboxContainer>
          <Checkbox label="男" />
          <Checkbox label="女" />
        </StyledCheckboxContainer>
        <StyledToggleContainer>
          <Toggle />
        </StyledToggleContainer>
        <StyledButtonContainer>
          <Button
            text="ボタン"
            onClick={() => alert('クリック')}
            isDisabled={false}
          />
        </StyledButtonContainer>
        <StyledModalBody>モーダルテキスト</StyledModalBody>
      </StyledModalBase>
    </>
  );
};

const StyledModalBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInputContainer = styled.div`
  display: flex;
`;

const StyledCheckboxContainer = styled.div``;

const StyledToggleContainer = styled.div``;

const StyledButtonContainer = styled.div``;

const StyledModalBody = styled.div`
  color: red;
`;
