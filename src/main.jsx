import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Login } from './components/login/login'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { DataBinding } from './components/data-binding/data-binding.jsx';
import { Weather } from './components/weather/weather.jsx';
import { Fakestore } from './components/fakestore/fakestore.jsx';
import { EventDemo } from './components/event-demo/event-demo.jsx';
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx';
import { MouseDown } from './mouse-down/mouse-down.jsx';
import { KeyDemo } from './components/key-demo/key-demo.jsx';

createRoot(document.getElementById('root')).render(
  
      <KeyDemo />
  
)
