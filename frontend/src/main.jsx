import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chatting from "./view/Chatting";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chatting />
  </StrictMode>,
)
