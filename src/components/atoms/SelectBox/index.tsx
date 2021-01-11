import React from 'react';
import styled from 'styled-components';

export const SelectBox = () => {
  return (
    <StyledSelect>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 100%;
  height: 50px;
  border: 2px solid red;
`;
