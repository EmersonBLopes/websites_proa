import React from 'react';
import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Main from './components/main/main';
import Aside from './components/aside/aside';
import Newsletter from './components/newsletter/section';
import Footer from './components/footer/footer';
function App(){
  return(
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Aside/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App