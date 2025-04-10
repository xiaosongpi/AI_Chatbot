import { useState } from 'react'
import '../style/Chatting.css'

function App() {
    const [menuIsClosed, setMenuIsOpened] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpened(!menuIsClosed);
    };
    
    return (
        <div className="container" style={{ gridTemplateColumns: menuIsClosed ? '72px 1fr' : '280px 1fr' }}>
            <div className="sidebar">
            <button className='sidebar-btn'>
                <div className='left-area'>
                    <button id='menu-btn' className='square-btn' onClick={toggleMenu}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3334 21H4.66669M16.9167 14H4.66669M23.3334 7H4.66669" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="right-area" style={{ visibility: menuIsClosed ? 'hidden' : '' }}>
                    <button className='square-btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9268 17.04L20.4 20.4M19.28 11.44C19.28 15.7699 15.7699 19.28 11.44 19.28C7.11006 19.28 3.59998 15.7699 3.59998 11.44C3.59998 7.11006 7.11006 3.59998 11.44 3.59998C15.7699 3.59998 19.28 7.11006 19.28 11.44Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button className='square-btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.55727 21.5574H4.75726C3.43177 21.5574 2.35726 20.4828 2.35727 19.1574L2.35736 4.75741C2.35737 3.43193 3.43188 2.35742 4.75736 2.35742H15.5576C16.8831 2.35742 17.9576 3.43194 17.9576 4.75742V9.55742M6.55764 7.15742H13.7576M6.55764 10.7574H13.7576M6.55764 14.3574H10.1576M13.1575 18.2484L18.2486 13.1573L21.6427 16.5514L16.5516 21.6426H13.1575V18.2484Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </button>
            <div className="sidebar-directory" style={{ visibility: menuIsClosed ? 'hidden' : '' }}>
                <p>Directory</p>
            </div>
            <div className="sidebar-history" style={{ visibility: menuIsClosed ? 'hidden' : '' }}>
                <p>History</p>
            </div>
            <div className="sidebar-profile">
                <button className='circle-btn'>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.7994 25.2L23.7998 21.0004C23.8 18.6807 21.9196 16.8 19.5998 16.8H8.40067C6.08126 16.8 4.20093 18.6802 4.20067 20.9996L4.2002 25.2M18.2002 7.00005C18.2002 9.31964 16.3198 11.2 14.0002 11.2C11.6806 11.2 9.8002 9.31964 9.8002 7.00005C9.8002 4.68045 11.6806 2.80005 14.0002 2.80005C16.3198 2.80005 18.2002 4.68045 18.2002 7.00005Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p style={{ visibility: menuIsClosed ? 'hidden' : '' }}>Human</p>
            </div>
        </div>
        <div className="content">
            <svg width="285" height="285" viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.375 256.5H64.1249C48.3847 256.5 35.6249 243.74 35.625 227.999L35.6261 57.0002C35.6262 41.2601 48.3861 28.5003 64.1261 28.5003H192.379C208.119 28.5003 220.879 41.2602 220.879 57.0003V114M235.125 235.125L249.375 249.375M85.5045 85.5003H171.004M85.5045 128.25H171.004M85.5045 171H128.254M242.25 206.625C242.25 226.3 226.3 242.25 206.625 242.25C186.95 242.25 171 226.3 171 206.625C171 186.95 186.95 171 206.625 171C226.3 171 242.25 186.95 242.25 206.625Z" stroke="#EACA91" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Hello xxx, it's time to work</p>
            <form action="" className='chat-form'>    
                <input className="chat-field" placeholder='Please send a message . . .'></input>
                <button className='chat-btn' type='submit'>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0976 23.2645H5.6011C4.05469 23.2645 2.80108 22.0109 2.8011 20.4645L2.80121 9.81947C2.80121 8.75323 2.80082 7.23454 2.80048 6.1349C2.80024 5.3615 3.42713 4.73526 4.20053 4.73526H10.8718L14.0976 8.18117H23.8C24.5732 8.18117 25.2 8.80797 25.2 9.58117V13.3M23.1 21.7L24.5 23.1M23.8 18.9C23.8 20.833 22.233 22.4 20.3 22.4C18.367 22.4 16.8 20.833 16.8 18.9C16.8 16.967 18.367 15.4 20.3 15.4C22.233 15.4 23.8 16.967 23.8 18.9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    </div>
    )
}

export default App
