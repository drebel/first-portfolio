import { useState } from "react"

export default function Header2(){

    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)
    const menuStyle = {
        backgroundImage: isMobileNavVisible ? 'url(src/assets/icons8-cancel-50.png)' : 'url(src/assets/icons8-menu-50.png)'
    }

    
    function handleClick(){
        setIsMobileNavVisible(!isMobileNavVisible)
    }

    return (
        <header className="primary-header flex" id="header">
            <div className='logo-div'>
                <img src='src/assets/icons8-happy-cloud-48.png' className="logo"/>
            </div>

            <nav id="primary-navigation" className="primary-navigation flex">
                <ul className='flex'>
                    <li className="">
                        <a className="" href="#header">
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="" href="#work">
                            <span>Work</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="" href="#about">
                            <span>About</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="" href="#contact">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={handleClick} style={menuStyle}>
                <span className="sr-only">Menu</span>
            </button>

        </header>
    )
}