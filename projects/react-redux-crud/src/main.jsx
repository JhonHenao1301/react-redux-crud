import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
)
