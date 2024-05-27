import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import {createStore} from 'redux';
import "./index.css";
import Reducers from "./Reducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from '@reduxjs/toolkit';

const store=createStore(Reducers,compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>

    <App />
    </Provider>

 
)
