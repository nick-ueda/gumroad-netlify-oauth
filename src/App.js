import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-contents'>
          <h1>Gumroad + Netlify Functions</h1>
          <p>Login with Gumroad OAuth</p>
          <div className='button-wrapper'>
            <a href="/.netlify/functions/auth">
              Login with Gumroad
            </a>
          </div>

          <a href="https://github.com/nick-ueda/gumroad-netlify-oauth" className='github-link'>
            View the source on Github
          </a>
        </div>
      </div>
    )
  }
}
