import React, { Component } from 'react'

import Author from './Author';
import Body from './Body';
import CommentShare from './CommentShare';
import AD from './AD';
import ClickBait from './ClickBait';

class Title extends Component {
    render() {
      return (
        <main className="expanded row">
        <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
          <Author />
          <Body />
          <CommentShare />
        </div>
        <AD />
        <ClickBait />
      </main>
      )
    }
}
export default Title
