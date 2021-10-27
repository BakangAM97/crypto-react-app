import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Typography, Space } from 'antd'

import { Navbar2, Exchanges, Homepage, CryptoCurrencies2, News3, CryptoDetails} from './components'
import './App.css'

const App = () => {
    return (
        <div className="app">
            {console.log(process.env.RAPIDAPI_KEY)}
            <div className="navbar">
                <Navbar2 />
            </div>
            <div className="main">
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies2 />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News3 />
                            </Route>
                        </Switch>
                    </div>  
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space className="foot-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/exchanges" className="nav-link">Exchanges</Link>
                        <Link to="/cryptocurrencies" className="nav-link">Crypto Currencies</Link>
                        <Link to="/news" className="nav-link">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
