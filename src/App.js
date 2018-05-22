import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';

const App = _ => (
    <div className="page_container">
    <Header />
    <Menu />
	<Footer />
	</div>
)

export default App
