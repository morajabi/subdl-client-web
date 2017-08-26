/* @flow */
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';


type Props = {
  children: (imageLoaded: boolean, onImageLoad: Function) => any;
}

type State = {
  loaded: boolean,
}

class IsImageLoaded extends PureComponent<Props, State> {
  constructor(...args: any) {
    super(...args);

    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded: Function;

  state = {
    loaded: false,
  }

  imageLoaded() {
    this.setState({ loaded: true });
  }

  render() {
    const { children } = this.props;
    const { loaded: imageLoaded } = this.state;

    return typeof children === 'function' ? children(imageLoaded, this.imageLoaded) : null;
  }
}

export default IsImageLoaded;
