import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chatting from "./Chatting.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chatting />
  </StrictMode>,
)
