import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Component } from 'react';
import './styles/mystyle.css';
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Hero from './pages/hero.jsx';
import ForgetPassword from './pages/forgetPassword.jsx';
import Verification from './pages/verification.jsx';
import ResetPassword from './pages/resetPassword.jsx';
import Success from './pages/success.jsx';
import Home from './pages/home.jsx';
import LeaveRequestForm from './pages/leaveRequestForm.jsx';


class App extends Component {
  render() {
    return (<>
      <Router>
        <Routes>
          <Route path="/" index exact element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leave-request-form" element={<LeaveRequestForm />} />
        </Routes>
      </Router>
    </>)
  };
}

export default App;
