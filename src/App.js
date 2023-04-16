import './App.css';


import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsItem from './Components/NewsItem';

export default class App extends Component {
  c='Abhishek'
  render() {
    return (
      <div>
       <NavBar></NavBar>
       <NewsItem/>
      </div>
    )
  }
}

