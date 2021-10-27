import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Meta } = Card;

const Currencies = () => {

    const { data: cryptosList, isFetching } = useGetCryptosQuery(5)
    const cryptos = cryptosList?.data?.coins

    if (isFetching) return "loading...."


    return (
        <div className="top-5-coins" >
        {cryptos?.map((currency) => (
            <div className="top-5-coin">
                <Link to={`/crypto/${currency.id}`} className="top-5-link">
                    <img alt="example" src={currency.iconUrl} className="top-5-image" />
                    <p className="top-5-text">{`${currency.name}`}</p>
                </Link> 
            </div>
            ))}
        </div>
    )
}

export default Currencies
