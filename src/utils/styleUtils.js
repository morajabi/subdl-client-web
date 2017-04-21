/* @flow */
import { css } from 'styled-components';


const mediaSizes = {
  xlarge: 1440,
  large: 1170,
  medium: 992,
  small: 640,
}

/**
 * Media query function 
 * @return {object} - Media generators for each size
 */
export const media: Object = Object.keys(mediaSizes).reduce((accumulator, label: string) => {
  const emSize: number = mediaSizes[label] / 16;
  accumulator.to[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  accumulator.from[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, { to: {}, from: {} });


/**
 * Truncate node text
 * @param {string} width - The element width
 */
export const truncate = (width: string) => (`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`);

/**
 * Colors
 */
export const colors = {
  PRIMARY: '#FFEA52',
};
