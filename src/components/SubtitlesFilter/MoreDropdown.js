/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lighten from 'polished/lib/color/lighten';

import Downshift from 'downshift';
import MoreIcon from './MoreIcon';
import { ResetedButton } from '../Button';
import { colors } from '../../utils/styleUtils';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Trigger = styled(ResetedButton)`
  width: 40px;
  height: 23px;
  display: inline-block;
  cursor: pointer;
`;

const OptionsBox = styled.div`
  width: auto;
  position: absolute;
  box-shadow: 0 2px 4px .5px rgba(0, 0, 0, .1);
  background: #fff;
  border: 1px solid #f2f2f2;
`;

const Option = styled(ResetedButton)`
  width: 100%;
  min-width: 80px;
  display: block;
  text-align: left;
  font-size: .9em;
  line-height: 1.7;
  cursor: pointer;
  padding: 0 5px 0 8px;

  background: ${p => p.selected ? lighten(0.2, colors.PRIMARY) : p.highlight ? '#eee' : 'none' }
`;

const items = ['asdasd', 'as', 's'];

const FilterMoreDropdown = ({ ...props }: any) => (
  <Downshift>
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
