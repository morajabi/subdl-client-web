import React from 'react';
import styled, { css } from 'styled-components';

import rem from '../utils/rem';
import { grey, lightYellow, lightBlue } from '../utils/colors';
import { truncate } from '../utils/styleUtils';

const rowHeight = 40;
const rowPadding = 15;
const cellPadding = 18;

const SubtitlesTable = props => (
  <Wrapper>
    <Head>
      <Cell fixed width="3%">#</Cell>
      <Cell fixed width="15%">lang (Persian)</Cell>
      <Cell fixed width="30%">details</Cell>
      <Cell fixed width="5%">H.I.</Cell>
      <Cell fixed width="10%">owner</Cell>
      <Cell fixed width="17%">comment{/* comment */}</Cell>
      <Cell fixed width="20%">action{/* action */}</Cell>
    </Head>

    <Row>
      <Cell fixed width="3%">1</Cell>
      <Cell fixed width="15%">Persian</Cell>
      <Cell fixed width="30%">
sasdasdasd
      </Cell>
      <Cell fixed width="5%">H.I.</Cell>
      <Cell fixed width="10%">
        <Owner>@morajabi</Owner>
      </Cell>
      <Cell fixed width="17%">
        <Comment>Sync. WEB-DL & HDRips</Comment>
      </Cell>
      <Cell fixed width="20%">action</Cell>
    </Row>

    <Row>
      <Cell fixed width="3%">1</Cell>
      <Cell fixed width="15%">Persian</Cell>
      <Cell fixed width="30%">
        sasdasdasd
      </Cell>
      <Cell fixed width="5%">H.I.</Cell>
      <Cell fixed width="10%">
        <Owner>@morajabi</Owner>
      </Cell>
      <Cell fixed width="17%">
        <Comment>Sync. WEB-DL & HDRips</Comment>
      </Cell>
      <Cell fixed width="20%">action</Cell>
    </Row>
  </Wrapper>
);

export default SubtitlesTable;

const Wrapper = styled.div`
  margin-top: 25px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  min-height: ${rem(rowHeight)};
  padding: 0 ${rem(rowPadding)};

  &:nth-child(n+3) {
    background: ${lightYellow};
  }
`;

const Head = styled(Row)`
  font-weight: bold;
  color: #666;
  background: ${grey};
`;

const Cell = styled.div`
  padding-right: ${rem(cellPadding)};
  text-align: ${p => p.align || 'inherit'};
  overflow-x: hidden;

  ${({ width, noGrow, noShrink, fixed }) => {
    const grow = fixed ? '0' : noGrow ? '0' : '1';
    const shrink = fixed ? '0' : noShrink ? '0' : '1';

    if (width) {
      return css`
        flex: ${grow} ${shrink} ${width};
      `;
    }

    return css`
      flex: ${grow} ${shrink} auto;
    `;
  }}
`;

const Owner = styled.a`
  font-size: .9em;
  letter-spacing: ${rem(0.4)};
  cursor: pointer;
  color: ${lightBlue};

  &:hover {
    text-decoration: underline;
    text-decoration-skip: ink;
  }
`;

const Comment = styled.div`
  ${truncate(`calc(100% - ${rem(cellPadding)})`)}
`;

const Download = styled.div`
  ${truncate(`calc(100% - ${rem(cellPadding)})`)}
`;
