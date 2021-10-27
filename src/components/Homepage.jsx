import React, { useState, useEffect, useRef } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import Currencies from './Currencies'


import { useGetCryptosQuery } from '../services/cryptoApi'
import News2 from './News2'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats
    
    if (isFetching) return "loading...."

    return (
        <>
            <div className="landing-page">
                <div className="landing-page-container">
                    <div className="header-content">
                        <h1 className="title outline">Cryptoverse</h1>
                        <p>Data about all cryptocurrencies and exchanges</p>
                    </div>            
                </div>

            </div>
            <div className={`homepage-section-2`}>
               <div className="home-heading-container">
                    <h2 className= "home-title" >Top 5 Cryptocurrencies in the world</h2>
                </div>
                <Currencies /> 
                  
                <div className="show-more">
                    <Title level={3} ><Link to="/cryptocurrencies" className="show-more-coins">Show More</Link></Title>
                </div>   
            </div>
            <div className="homepage-section-1">
                <Title level={2} className="heading">GLOBAL CRYPTO STATISTICS</Title>
                <div className="global-stats">
                    <Row>
                        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarketCap)}/></Col>
                    </Row>
                </div>
            </div>
            
            <div className="homepage-section-3">
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Latest Crytpo News</Title>
                </div>
                <News2 />
                <div className="show-more-news show-more show-more-coins">
                    <h3><Link to="/news">Show More</Link></h3>
                </div>
            </div>
            
            
            
        </>
    )

}

export default Homepage
