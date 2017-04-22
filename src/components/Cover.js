/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import Grade from 'grade-js';

class Cover extends Component {
  constructor(p: any) {
    super(p);
  }

  wrapper: any;
  onImageLoad: Function;

  initGrade() {
    Grade(this.wrapper);
  }

  componentDidMount() {
    if(this.wrapper) {
      const img = this.wrapper.querySelector('img');
      if (img.complete) {
        this.initGrade();
      } else {
        this.onImageLoad = img.addEventListener('load', (() => {
          this.initGrade();
        }).bind(this));
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener(this.onImageLoad);
    this.wrapper = null;
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper} {...this.props} />;
  }
}

export default Cover;
