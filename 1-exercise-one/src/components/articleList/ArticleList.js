import React, { Component } from 'react'
import ArticleData from '../data/data.json'
import ArticleCard from './ArticleCard'

//does this have to be class?
export default class ArticleList extends Component {
    render() {
        return ArticleData.map((article)=>(
            <ArticleCard key={article.id} article={article}/>
        ))
    }
}
