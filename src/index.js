import React from 'react'
import ReactDOM from 'react-dom'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import './index.css'

ReactDOM.render(
  <Demo1 />, // 想要执行Demo2时，将1改成2即可
  document.getElementById('root')
)