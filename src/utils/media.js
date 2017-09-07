import media from 'styled-media-query';

export const mobile = cssContent => media.lessThan('small')`${cssContent}`;
