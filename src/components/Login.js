import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../utils/styleUtils';

import Container from './Container';
import TopNav from './TopNav';

const PaddedContainer = styled(Container)`
  padding-top: 100px;
`;

const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  margin: 32px auto 0px;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.75;
`;

const TitleLine = styled.div`
  width: 38px;
  margin: 0 auto;
  border-top: 1px solid #CACACA;
`;

const Forward = styled.p`
  margin: 3px 0 0 0;
  font-size: 13px;
  letter-spacing: .3px;
  color: #ABABAB;
`;

const ForwardLink = styled(Link)`
  margin-left: 10px;
  color: #2F80ED;
`;

const Form = styled.form`
  margin: 40px auto;
  width: 330px;
  height: 250px;
`;

const Label = styled.label`
  font-size: 15px;
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

const Input = styled.input`
  width: 100%;
  height: 100%;
  line-height: ${inputHeight};
  padding: 0 10px;
  border: 1px solid #DDDDDD;
  font-size: 18px;
  color: #CACACA;
  
  ::placeholder {
    color: #CACACA;
  }
`;


const Header = () => (
  <Center>
    <TitleLine />
    <Title>Login</Title>
    <Forward>
      <span>Not a user yet?</span>
      <ForwardLink to="/">Signup</ForwardLink>
    </Forward>
  </Center>
);


const InputLabel = (props) => (
  <InputLabelContainer>
    <Label>{props.label}</Label><br />
    <InputContainer>
      <Input type="text" placeholder={props.placeholder} />
    </InputContainer>
  </InputLabelContainer>
);

const Login = () => (
  <div>
    <header>
      <TopNav searchBar={false}></TopNav>
    </header>
    <PaddedContainer>
      <Header />
      <Form>
        <InputLabel label="Your Email" placeholder="e.g. you@example.com" />
        <InputLabel label="Password" placeholder="Text is invisible" />
      </Form>
    </PaddedContainer>
  </div>
);

export default Login;