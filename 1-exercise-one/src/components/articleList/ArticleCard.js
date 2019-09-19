import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ArticleCard extends Component {
    render() {
        return (
            <div style={card} className='articleCard'>
                <img style={cardImg} src={this.props.article.image.url} alt={this.props.article.image.alt} />
                <div style={cardText}>
                    <h2>{this.props.article.title}</h2>
                    <p style={cardDate}>{this.props.article.publishedDate.split(" ").slice(0, 4).join(" ")}</p>
                    <p>{this.props.article.blurb}</p>
                    {/* Pass props in <Link/> */}
                    <Link to={{
                        pathname: `/articlepage/${this.props.article.id}`,
                        state: { article: this.props.article }
                    }}>
                        Read more
                    </Link>
                </div>
            </div>
        )
    }
}

const card = {
    border: '1px solid black',
    display: 'flex',
    padding: '20px',
    marginBottom: '20px'
}

const cardImg = {
    width: "200px"
}

const cardText = {
    margin: "10px"
}

const cardDate = {
    fontSize: "12px",
}