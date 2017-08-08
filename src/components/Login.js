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
  padding: 0 12px;
  border: 1px solid #DDDDDD;
  font-size: 18px;
  color: #CACACA;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);

  ::placeholder {
    color: #CACACA;
  }
`;

const ForgetLink = styled.div`
  margin: 7px 0 0 0;
  font-size: 12px;
  // letter-spacing: .3px;
  color: #ABABAB;
`;


const LineButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  margin: 10px 0 0 0;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;


const LoginButtonLine = styled.div`
  width: 152px;
  border-top: 1px solid #EDEDED;
`;


const LoginButtonYellow = styled.input`
  width: 160px;
  height: 42px;
  background: #FFEE2B;
  border: 1px solid #E7D722;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
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

const ForgetPassword = () => (
  <ForgetLink>
    <span>Dont’t remember?</span> 
    <ForwardLink to="/">Recover your password</ForwardLink>
  </ForgetLink>
);

const LoginButton = () => (
  <LoginButtonYellow type="submit" value="Login to your account" />
);




const Login = () => (
  <div>
    <header>
      <TopNav searchBar={false}></TopNav>
    </header>
    <PaddedContainer>
      <Header />
      <Form>
        <InputLabel label="Your Email" placeholder="e.g. you@example.com" under />
        <InputLabel label="Password" placeholder="Text is invisible" />
        <ForgetPassword />
        <LineButtonContainer>
          <LoginButtonLine />
          <LoginButton />
        </LineButtonContainer>
      </Form>
    </PaddedContainer>
  </div>
);

export default Login;