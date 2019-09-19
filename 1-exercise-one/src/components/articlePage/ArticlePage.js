import React, { Component } from 'react'
import TypeBlock from './TypeBlock'

export default class ArticlePage extends Component {
    render() {
        //'this.props.location.state' is a specific syntax
        const currentArticle = this.props.location.state.article

        const header = {
            backgroundImage: `url(${currentArticle.image.url})`,
            width: '100%',
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '50px'
        }

        return (
            <div>
                <div style={header}>
                    <div style={{width: "50%"}}>
                        <div style={title}>{currentArticle.title}</div>
                        <p>{currentArticle.publishedDate.split(" ").slice(0, 4).join(" ")}</p>
                        <p>{currentArticle.blurb}</p>
                    </div>
                </div>
                {/* loop this with map and put tag based on type using TypeBlock function*/}
                <div style={content}>
                    {currentArticle.articleText.map((text) => 
                        <TypeBlock type={text.type} data={text.data}/>
                    )}
                </div>
            </div>
        )
    }
}

const title = {
    fontSize: "36px",
}

const content = {
    display: "flex",
    flexDirection: "column",
    width: "50%", 
    margin: "0 auto"
}