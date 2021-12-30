import React from 'react'
import CardNews from '../../card/card_news'
import News from "../../../data/json/news.json"


export default function ListNews() {
    return (
        <div>
        <h1>Some Latest Article</h1>
        {
            News.map((e)=>{
                return (
                    <CardNews key={e.__v}/>
                );
            })
        }
           
        </div>
    )
}
