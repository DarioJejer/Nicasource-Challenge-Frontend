import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';

function App() {
  return (
    // <Router>
    //   <Routes>
    //       <Route path="/" render={()=>{<Home/>}} />
    //   </Routes>
    // </Router>
    <Home/>
  );
}

export default App;
