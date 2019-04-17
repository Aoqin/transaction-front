import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.css'

export default class HomePage extends Component {

  renderMain() {
    return (<div className="main">main</div>)
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderMain()}
        <Footer />
      </div>
    )
  }
}
