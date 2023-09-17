import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MALogin from './Screens/MAlogin';
import MASignup from './Screens/MAsignUp';
import MADashboard from './Screens/MADashboard/MADashboard';
import { Routes , Route } from "react-router-dom";
import { Button } from '@mui/material';
import AppRouter from './config/Router/Router';
import MAdatePicker from './Components/MAdatePicker';
import MAbutton from './Components/MAbutton';
import MAiconButton from './Components/MAiconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MAinput from './Components/MAinput';
import MAselect from './Components/MAselect';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
     <AppRouter />
     {/* <MALogin/> */}
     
    </div>
  );

  }
export default App;
  
