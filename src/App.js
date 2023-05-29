import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NewsList from './components/NewsList';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Routes>
            <Route exact path="/all" element={<NewsList key="all"/>}/>
            <Route exact path="/business" element={<NewsList key="business" category="business"/>}/>
            <Route exact path="/entertainment" element={<NewsList key="entertainment" category="entertainment"/>}/>
            <Route exact path="/health" element={<NewsList key="health" category="health"/>}/>
            <Route exact path="/science" element={<NewsList key="science" category="science"/>}/>
            <Route exact path="/sports" element={<NewsList key="sports" category="sports"/>}/>
            <Route exact path="/technology" element={<NewsList key="technology" category="technology"/>}/>
            <Route path="/" element={<SearchPage />} />
        </Routes>
      </div>
      </Router>
    )
  }
}

