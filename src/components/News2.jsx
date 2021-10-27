import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'


const News2 = () => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const {data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: 6 })
    const { data } = useGetCryptosQuery(100)

    if(!cryptoNews?.value) return 'Loading ....'

    return (
        <div className="news-container">
            {cryptoNews.value.map((news, i) => (
                <div className="news-card-body">
                    <a 
                        className="news-card-link"
                        href={news.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="news-image-container">
                            <Title className="news-title" level={4}>{news.name.length >70 ? `${news.name.substring(0,70)}...` : news.name }</Title>
                            <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />  
                        </div>
                        <p>
                            {news.description.length > 200 ? `${news.description.substring(0,200)}...` : news.description }
                        </p>
                        <div className="provider-container">
                            <div>
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                <Text className="provider-name">{news.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default News2
