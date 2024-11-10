import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Routes/Login'; 
import SignUp from './Routes/SignUp'; 
import Home from './Routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
}


export default App;