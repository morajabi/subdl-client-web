/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import Grade from 'grade-js';

class Cover extends Component {
  constructor(p: any) {
    super(p);
  }

  img: any;
  wrapper: any;
  onImageLoad: Function;

  initGrade() {
    Grade(this.wrapper, 'img[data-grade]');
  }

  componentDidMount() {
    if(this.wrapper) {
      this.img = this.wrapper.querySelector('img[data-grade]');
      if (this.img.complete) {
        this.initGrade();
      } else {
        this.onImageLoad = this.img.addEventListener('load', (() => {
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
