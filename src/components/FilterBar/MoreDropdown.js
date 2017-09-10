/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lighten from 'polished/lib/color/lighten';

import Downshift from 'downshift';
import MoreIcon from './MoreIcon';
import { ResetedButton } from '../Button';
import { lightBlue } from '../../utils/colors';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Trigger = styled(ResetedButton)`
  width: 35px;
  height: 23px;
  display: inline-block;
  cursor: pointer;
  color: #999;

  &:focus {
    outline: none;
    background: #f2f2f2;
  }
`;

const OptionsBox = styled.div`
  width: auto;
  position: absolute;
  z-index: 5;

  box-shadow: 0 2px 4px .5px rgba(0, 0, 0, .1);
  background: #fff;
  border: 1px solid #f2f2f2;
`;

const Option = styled(ResetedButton)`
  width: 100%;
  min-width: 100px;
  display: block;
  text-align: left;
  font-size: 1em;
  line-height: 1.6;
  cursor: pointer;
  padding: 3px 8px 3px 10px;
  outline: none;

  background: ${p =>
      p.selected ? lightBlue :
      p.highlight ? '#eee' : 'none'
    };
  color: ${p => p.selected ? 'white' : 'inherit'};
`;

const it = ['asdasd', 'as', 's'];

const FilterMoreDropdown = ({ items = it, ...props }: any) => (
  <Downshift {...props}>
    {({
      getItemProps,
      isOpen,
      selectedItem,
      highlightedIndex,
      getRootProps,
      getButtonProps,
    }) => (
      <Wrapper {...getRootProps({ refKey: 'innerRef' })}>
        <Trigger
          {...getButtonProps()}
        >
          <MoreIcon />
        </Trigger>
        {isOpen ? (
          <OptionsBox>
            {items.map((item, index) => (
              <Option
                {...getItemProps({item})}
                key={item}
                highlight={highlightedIndex === index}
                selected={selectedItem === item}
              >
                {item}
              </Option>
            ))}
          </OptionsBox>
        ) : null}
      </Wrapper>
    )}
  </Downshift>
);

export default FilterMoreDropdown;
