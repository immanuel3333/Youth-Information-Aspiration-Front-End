import React from 'react'
import CardNews from '../../card/card_news'
import News from "../../../data/json/news.json"
import {Row,Col} from 'react-bootstrap'


export default function ListNews() {
    return (
        <Row className='px-4 justify-content-between'>
        <h3>Some Latest Article</h3>
        {
            News.map((e)=>{
                return (
                    <CardNews key={e.__v}/>
                );
            })
        }
           
        </Row>
    )
}
