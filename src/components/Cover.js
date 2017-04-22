/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import Grade from 'grade-js';

class Cover extends Component {
  constructor(p: any) {
    super(p);
    this.imageQuery = 'img[data-grade]';
  }

  img: any;
  imageQuery: string;
  wrapper: any;
  onImageLoad: Function;

  initGrade() {
    Grade(this.wrapper, this.imageQuery);
  }

  componentDidMount() {
    if(this.wrapper) {
      this.img = this.wrapper.querySelector(this.imageQuery);
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
