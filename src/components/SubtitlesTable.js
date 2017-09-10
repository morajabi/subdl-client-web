import React from 'react';
import styled, { css } from 'styled-components';

import rem from '../utils/rem';
import { grey, lightYellow, lightBlue } from '../utils/colors';
import { truncate } from '../utils/styleUtils';
import { ResetedButton } from './Button';

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
      <Cell fixed width="20%">{/* action */}</Cell>
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
      <Cell fixed width="20%">
        <Download>download</Download>
      </Cell>
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
      <Cell fixed width="20%">
        <Download>download</Download>
      </Cell>
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

  &:hover [data-label="download"] {
    opacity: 1;
  }

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
  color: #555;

  &:hover {
    text-decoration: underline;
    text-decoration-skip: ink;
  }
`;

const Comment = styled.div`
  ${truncate(`calc(100% - ${rem(cellPadding)})`)}
`;

const Download = styled(ResetedButton).attrs({
  'data-label': 'download',
})`
  display: inline-block;
  padding: ${rem(4)} ${rem(6)};
  font-weight: 400;
  font-size: .9em;

  color: ${lightBlue};
  background: rgba(0, 0, 0, 0.04);
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: ${lightBlue};
  }
`;
