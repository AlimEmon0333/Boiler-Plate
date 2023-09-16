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

function App() {
  return (
    <div className="App">
     <AppRouter />
     <MAdatePicker Onchange={(e:any)=>{console.log(e.target.value)}}/>
     <MAbutton Classname='bg-danger text-white'  value="Get Started" Onclick={(e:any) => {console.log(e.target.value)}}/>
     <MAiconButton Onclick={(e:any) => {alert(e.target.value)}} value={<AddShoppingCartIcon /> }/>
     <MAinput label='Enter' onchange={(e:any)=> console.log(e.target.value)} />
     <MAselect Placeholder='Select' items={['ali','ahad']} classname='my-5'/>
    </div>
  );

  }
export default App;
  
