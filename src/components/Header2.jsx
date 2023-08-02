import { useEffect, useState } from "react"

export default function Header2(){

    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)
    const menuStyle = {
        backgroundImage: isMobileNavVisible ? 'url(src/assets/cancel.svg)' : 'url(src/assets/menu.svg)'
    }

    

    const mobileNavMovement = {
        transform: isMobileNavVisible ? 'translateY(0%)' : 'translateY(-110%)'
    }

    
    function handleClick(){
        setIsMobileNavVisible(!isMobileNavVisible)
    }



    return (
        <header id="header">
            <div id="header-container" className="primary-header flex">
            <div className='logo-div'>
                {/* <img src='src/assets/icons8-happy-cloud-48.png' className="logo"/> */}
                <svg 
                    fill="#d74034" 
                    height="40px" 
                    width="40px" 
                    version="1.1" 
                    id="XMLID_125_" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    xmlSpace="preserve">
                        <g 
                        id="SVGRepo_bgCarrier"
                        strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g id="grow"> <g> <path d="M16.9,24H7.2l-1-7H4v-2h7v-3.1c-1.9,0.3-3.8-0.2-5.2-1.4C4.1,9,3.6,6.8,4.4,4.8l0.2-0.4L5,4.3C7,3.6,9.4,4,11,5.2 c0-1.4,0.6-2.8,1.8-3.8l0,0c1.1-0.9,2.6-1.4,4-1.4c0.7,0,1.5,0.1,2.2,0.3l0.4,0.1l0.2,0.4c0.9,2,0.4,4.2-1.4,5.7 c-1.4,1.2-3.3,1.7-5.2,1.4V9c0,0.1,0,0.3,0,0.4V15h7v2h-2.1L16.9,24z M8.9,22h6.3l0.7-5H8.2L8.9,22z M6.1,6.1 c-0.3,1,0.1,2.1,1,2.9c1,0.9,2.5,1.2,3.8,0.9C11,9.7,11,9.5,11,9.3V9c0-0.8-0.4-1.5-1.1-2.1C8.9,6.1,7.5,5.8,6.1,6.1z M13.1,5.9 c1.4,0.3,2.8,0,3.8-0.9c0.9-0.8,1.3-1.9,1-2.9c-1.4-0.3-2.8,0-3.8,0.9l0,0C13.2,3.7,12.8,4.8,13.1,5.9z"></path> </g> </g> </g>
                </svg>
            </div>



            <nav id="mobile-nav" className="primary-navigation flex " style={mobileNavMovement}>
                <ul className='flex'>
                    <li className="">
                        <a className="primary-navigation--a" href="/" onClick={handleClick}>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="primary-navigation--a" href="#work" onClick={handleClick}>
                            <span>Work</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="primary-navigation--a" href="#about" onClick={handleClick}>
                            <span>About</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="primary-navigation--a cta" href="#contact" onClick={handleClick}>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav id="desktop-nav" className="primary-navigation flex">
                <ul className='flex primary-navigation--ul'>
                    <li className="">
                        <a className="primary-navigation--a" href="/">
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="primary-navigation--a" href="#work">
                            <span>Work</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="primary-navigation--a" href="#about">
                            <span>About</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="cta primary-navigation--a" href="#contact">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={handleClick} style={menuStyle}>
                <span className="sr-only">Menu</span>
            </button>
            </div>
            

        </header>
    )
}