/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * Reset default Input styles
 */
export const ResetedInput = styled.input`
  border: none;
  background: none;
  outline: none;
`;

const LabelsWrapper = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: #9A9A9A;
`;

const InputContainer = styled.div`
  width: 330px;
  height: 45px;
`;

const StyledInput = ResetedInput.extend`
  width: 100%;
  height: 100%;
  line-height: 100%;
  padding: 0 12px;
  border: 1px solid #DDDDDD;
  font-size: 17px;
  color: #CACACA;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);

  ::placeholder {
    color: #CACACA;
  }
`;

const InputDescription = styled.p`
  margin: 8px 0 0 0;
  font-size: 12px;
  color: #ABABAB;
`;

const LabelDescription = styled.span`
  font-size: 12px;
  color: #BDBDBD;
  padding-left: 5px;
`;

const Input = ({ wrapperProps, className, label, labelDescription, description, ...props }) => (
  <div {...wrapperProps} className={className}>

    <LabelsWrapper>
      {label && 
        <Label>{label}</Label>  
      }

      {labelDescription &&
        <LabelDescription>{labelDescription}</LabelDescription>
      }
    </LabelsWrapper>

    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>

    {description && 
      <InputDescription>{description}</InputDescription>
    }
  </div>
);

export default Input;