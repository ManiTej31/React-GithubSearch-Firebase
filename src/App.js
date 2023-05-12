import React, {useState} from 'react';
import './App.css';

//bootstarp
import "bootstrap/dist/css/bootstrap.min.css"

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//toast
import { ToastContainer } from 'react-toastify';
import"react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from 'firebase/compat/app';
import "firebase/auth"

//component
import Home from "./Pages/Home"
import Signin from "./Pages/SignIn"
import Signup from "./Pages/SignUp"
import PageNotFound from "./Pages/PageNotFound"
import {UserContext} from "./Context/UserContext"
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import firebaseConfig from './Config/firebaseConfig';

//init firebase
firebase.initializeApp(firebaseConfig)


const App = () => {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  path="/Signin" element={<Signin/>}/>
                <Route  path="/Signup" element={<Signup/>}/>
                <Route  path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
