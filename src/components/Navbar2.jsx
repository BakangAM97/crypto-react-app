import React , { useState, useEffect } from 'react'

import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize',handleResize)
    },[])

    return (
        <div >
            <div className="header">
                <a href="/">
                   <h1 className="outline">Cryptoverse</h1> 
                </a>
                
                { screenSize > 750 && (   
                    <div className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <Link to="/"  className="nav-link">Home</Link>
                                
                            </li>
                            <li className="nav-list-item">
                                
                                <Link to="/cryptocurrencies"  className="nav-link">CryptoCurrencies</Link>
                            </li>
                            <li className="nav-list-item">
                                
                                <Link to="/exchanges"  className="nav-link">Exchanges</Link>
                            </li>
                            <li className="nav-list-item">
                                
                                <Link to="/news"  className="nav-link">News</Link>
                            </li>
                        </ul>
                    </div>
                )}
                
                <Button 
                    className="menu-control-container"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <div className="main-nav dropdown">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/"  className="nav-link">Home</Link>
                            
                        </li>
                        <li className="nav-list-item">
                           
                            <Link to="/cryptocurrencies"  className="nav-link">CryptoCurrencies</Link>
                        </li>
                        <li className="nav-list-item">
                            
                            <Link to="/exchanges"  className="nav-link">Exchanges</Link>
                        </li>
                        <li className="nav-list-item">
                            
                            <Link to="/news"  className="nav-link">News</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar2
