import React from 'react';
import './App.css';
import TopNav from './components/layouts/TopNav';
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <TopNav />
            <Home />
        </div>
    );
}

export default App;
