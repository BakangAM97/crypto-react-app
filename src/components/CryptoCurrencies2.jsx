import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const CryptoCurrencies2 = () => {

    const { data: cryptosList, isFetching } = useGetCryptosQuery(100)
    const [ cryptos, setCryptos ] = useState([])
    const [ searchItem, setSearchItem] = useState('')

    useEffect(() => {
        const fileteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem))

        setCryptos(fileteredData);

    }, [cryptosList, searchItem])

    if (isFetching) return "loading...."

    return (
        <>
            <div className="section-title">
                <h1>Crypto Currencies</h1>
            </div>
            <div className="crypto-currencies-section">
                <div className="search-crypto">
                    <Input 
                        placeholder="Search Crpyto Currency"
                        onChange={(e) => setSearchItem(e.target.value)}
                        />
                    </div>    
                    <div className="crypto-card-container">
                    {cryptos?.map((currency) => (
                        <div className="crypto-card" key={currency.id}>
                            <Link className="crypto-card-inner" to={`/crypto/${currency.id}`}>
                                <div className="crypto-coin-title">
                                    <img className="crypto-image" src={currency.iconUrl} />
                                    <p> {`${currency.rank}. ${currency.name}`} </p>    
                                </div> 
                                <div className="crypto-details">
                                    <p> Price: {millify(currency.price)}</p>
                                    <p> Market Cap: {millify(currency.marketCap)}</p>
                                    <p> Daily Change: {millify(currency.change)}%</p>
                                </div>               
                                    
                            </Link>  
                        </div>
                    ))}
                </div>        
            </div>
        </>
    )
}

export default CryptoCurrencies2
