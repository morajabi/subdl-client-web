import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../utils/styleUtils';


import Container from './Container';
import TopNav from './TopNav';
import Input from './Input';
import Select from './Select';


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

const Subtitle = styled.span`
  margin: 8px 0 0 0;
  display: block;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 18px;
  text-align: center;
  color: #000000;
`;

const Forward = styled.p`
  margin: 7px 0 0 0;
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
  width: 709px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ColumnsContainer = styled.div`
  margin: 40px auto;
  width: 709px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: 49.5%;
  height: 100%;
  over-flow: hidden;

  &:last-child {
    border-left: 1px solid #F0F0F0;
    padding-left: 30px;
  }
`;

const ColumnTitle = styled.div`
  width: 100%;
  height: 20px;
  color: #C2C2C2;
  font-size: 15px;
  font-style: italic;
`;

const InputWithMargin = styled(Input)`
  margin-top: 20px;
`;

const SelectWithMargin = styled(Select)`
  margin-top: 20px;
`;

const TermsContainer = styled.div`
  margin-top: 20px;
`;

const Termstext = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: #9A9A9A;
`;

const ReferLanguageContainer = styled.div`
  width: 100%;
  height: 20px;
  color: #C2C2C2;
  font-size: 15px;
  margin-top: 20px;
`;

const PickLanguage = styled.a`
  font-size: 13px;
  color: #2D9CDB;
  margin-left: 5px;
`;

const ReferLanguageText = styled.span`
  font-size: 16px;
`;

const SignupContainer = styled.div`
  width: 300px;
  height: 52px;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignButtonLine = styled.div`
  width: 66px;
  border-top: 1px solid #EDEDED;
`;

const SignupButtonYellow = styled.div`
  width: 124px;
  height: 45px;
  background: #FFEE2B;
  border: 1px solid #E7D722;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const SignupText = styled.strong`
  font-weight: 700;
  line-height: normal;
  font-size: 17px;
  color: #333333;
`;

const SignupSmallText = styled.span`
  font-size: 9px;
  color: #333333;
  opacity: 0.7;
  margin-top: 3px;
`;

const Header = () => (
  <Center>
    <TitleLine />
    <Title>Signup</Title>
    <Subtitle>Join 6,165 users in our family at SUBDL</Subtitle>
    <Forward>
      <span>Already a user?</span>
      <ForwardLink to="/login">login</ForwardLink>
    </Forward>
  </Center>
);

const TermsCheckbox = (props) => (
  <TermsContainer>
    <input type="checkbox" name="terms" />
    <Termstext>I read and agree with the Terms of Services and Privacy Policy.</Termstext>
  </TermsContainer>
);

const ReferLanguage = () => (
  <ReferLanguageContainer>
    <ReferLanguageText>Your language is <em>Farsi</em>.</ReferLanguageText>
    <PickLanguage href="#">Pick another language</PickLanguage>
  </ReferLanguageContainer>
);

const SignupButton = () => (
  <SignupContainer>
    <SignButtonLine />
    <SignupButtonYellow>
        <SignupText>Signup!</SignupText> 
        <SignupSmallText>Join our family now</SignupSmallText>
    </SignupButtonYellow>
    <SignButtonLine />
  </SignupContainer>
);

const Signup = () => (
  <div>
    <header>
      <TopNav searchBar={false}></TopNav>
    </header>
    <PaddedContainer>
      <Header />
      <Form>
        <ColumnsContainer>
          <Column>
            <Input
              type="text" 
              label="Your Email" 
              placeholder="e.g. you@example.com" 
              labelDescription="(We’ll never spam you)" 
            />
            <InputWithMargin 
              type="password" 
              label="Password" 
              placeholder="Text is invisible" 
              description="More than 8 charachters" 
            />
            <TermsCheckbox />
          </Column>

          <Column>
            <ColumnTitle>Just two more questions...</ColumnTitle>
            <InputWithMargin 
              type="text" 
              label="What’s your name?" 
              placeholder="e.g. Sara Bradly" 
              labelDescription="(We’ll never spam you)" 
            />
            <SelectWithMargin
              label="Where are you from?"
              placeholder="Pick a country ..."
            />
            <ReferLanguage />
          </Column>
        </ColumnsContainer>
        <SignupButton />
      </Form>
    </PaddedContainer>
  </div>
);

export default Signup;