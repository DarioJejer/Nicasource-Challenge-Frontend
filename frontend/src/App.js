import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Landing } from './components/Landing/Landing';

function App() {

  const userToken = JSON.parse(localStorage.getItem("user"));

  return (
    // <Router>
    //   <Routes>
    //       <Route path="/" render={()=>{<Home/>}} />
    //   </Routes>
    // </Router>
    <>
      {userToken ? ( 
        <Home/>
      ) : (
        <Landing/>
      )}
    </>
  );
}

export default App;
