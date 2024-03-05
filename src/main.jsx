import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from "./components/Header"
import ImageSlider from "./components/ImageSlider"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ImageSlider />
  </React.StrictMode>,
)
