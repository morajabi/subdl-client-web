/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

export const ResetedInput = styled.input`
  border: none;
  background: none;
  outline: none;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #9A9A9A;
`;

const InputLabelContainer = styled.div`
  margin-top: 20px;
`;

const inputHeight = '45px';

const InputContainer = styled.div`
  width: 330px;
  height: ${inputHeight};
  margin-top: 5px;
`;

const StyledInput = ResetedInput.extend`
  width: 100%;
  height: 100%;
  line-height: ${inputHeight};
  padding: 0 12px;
  border: 1px solid #DDDDDD;
  font-size: 17px;
  color: #CACACA;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);

  ::placeholder {
    color: #CACACA;
  }
`;

const Input = ({ wrapperProps, className, label, ...props }) => (
  <InputLabelContainer {...wrapperProps} className={className}>

    {label && <Label>{label}</Label>}

    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>
  </InputLabelContainer>
);
<Input wrapperProps={{ style: { width: "100px"} }}/>
export default Input;