import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Friends from './components/Friends/Friends'
import NotFoud from './components/NotFound/NotFoud';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFoud/>} />
      </Routes>
    </div>
  );
}

export default App;
