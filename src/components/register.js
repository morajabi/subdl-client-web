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

const Header = () => (
  <Center>
    <TitleLine />
    <Title>Register</Title>
    <Forward>
      <span>Join 6,165 users in our family at SUBDL</span>
      <span>Already a user?</span>
      <ForwardLink to="/login">login</ForwardLink>
    </Forward>
  </Center>
);

const Register = () => (
  <div>
    <header>
      <TopNav searchBar={false}></TopNav>
    </header>
    <PaddedContainer>
      <Header />
      <Form>
     
      </Form>
    </PaddedContainer>
  </div>
);

export default Register;