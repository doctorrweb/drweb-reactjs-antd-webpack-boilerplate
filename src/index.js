import React from 'react'
import { render } from 'react-dom'
import App from './containers/app.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import './styles/main.css'

render(
    <App />,
    document.querySelector('#app')
)