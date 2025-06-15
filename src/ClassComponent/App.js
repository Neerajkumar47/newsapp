import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi"
    }
  }
  changeLanguage=(data)=>{
    this.setState({language:data})
  }
  render() {
    return (
        <BrowserRouter>
        <Navbar url={this.changeLanguage}/>
            <Routes>
                <Route path="" element={<Home language={this.state.language} q="All"/>}/>
                <Route path="/All" element={<Home language={this.state.language} q="All"/>}/>
                <Route path="/Politics" element={<Home language={this.state.language} q="Politics"/>}/>
                <Route path="/Crime" element={<Home language={this.state.language} q="Crime"/>}/>
                <Route path="/Education" element={<Home language={this.state.language} q="Education"/>}/>
                <Route path="/Entertainment" element={<Home language={this.state.language} q="Entertainment"/>}/>
                <Route path="/Science" element={<Home language={this.state.language} q="Science"/>}/>
                <Route path="/Technology" element={<Home language={this.state.language} q="Technology"/>}/>
                <Route path="/Sports" element={<Home language={this.state.language} q="Sports"/>}/>
                <Route path="/Cricket" element={<Home language={this.state.language} q="Cricket"/>}/>
                <Route path="/IPL" element={<Home language={this.state.language} q="IPL"/>}/>
                <Route path="/Covid-19" element={<Home language={this.state.language} q="Covid-19"/>}/>
                <Route path="/India" element={<Home language={this.state.language} q="India"/>}/>
                <Route path="/World" element={<Home language={this.state.language} q="World"/>}/>

            </Routes>
           <Footer/>
        </BrowserRouter>
      
    )
  }
}
