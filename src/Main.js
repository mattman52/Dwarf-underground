import React, { Component } from 'react'

import Header from './Header';
import Author from './Author';
import Body from './Body';
import CommentShare from './CommentShare';
import AD from './AD';
import ClickBait from './ClickBait';
import Footer from './Footer';

class Main extends Component {
    render() {
      return (
        <div className="App">
        <Header />
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
        <Footer />
        </div>
      )
    }
}
export default Main