import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../utils/styleUtils';

import Container from './Container';
import TopNav from './TopNav';
import Input from './Input';

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


const ForgetLink = styled.div`
  margin: 8px 0 0 0;
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


const LoginButtonYellow = styled.div`
  width: 160px;
  height: 42px;
  background: #FFEE2B;
  border: 1px solid #E7D722;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
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




const ForgetPassword = () => (
  <ForgetLink>
    <span>Dont’t remember?</span> 
    <ForwardLink to="/register">Recover your password</ForwardLink>
  </ForgetLink>
);

const LoginButton = () => (
  <LoginButtonYellow>
    <span>
      <strong>Login</strong> to your account
    </span>
  </LoginButtonYellow>
);


const Login = () => (
  <div>
    <header>
      <TopNav searchBar={false}></TopNav>
    </header>
    <PaddedContainer>
      <Header />
      <Form>
        <Input type="text" label="Your Email" placeholder="e.g. you@example.com"  />
        <Input type="password" label="Password" placeholder="Text is invisible" />
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