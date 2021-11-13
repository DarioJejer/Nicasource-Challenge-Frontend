import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { Home } from './components/Home/Home';
import { Landing } from './components/Landing/Landing';

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    // <Router>
    //   <Routes>
    //       <Route path="/" render={()=>{<Home/>}} />
    //   </Routes>
    // </Router>
    <>
      {user ? ( 
        user.IsAdmin ? (
          <AdminPanel/>
          ) : (
          <Home/>          
        )
      ) : (
        <Landing/>
      )}
    </>
  );
}

export default App;
