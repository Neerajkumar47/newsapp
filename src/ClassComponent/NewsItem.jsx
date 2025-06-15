import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
        <div class="card" >
        <img src={this.props.pic} height={150} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <div className='items'>
            <p>{this.props.source}</p>
            <p>{new Date(this.props.date).toLocaleDateString()}</p>
          </div>
          <hr/>
          <p class="card-text">{this.props.description}</p>
          <a href={this.props.url} target='_blank' rel='noreferrer' class="btn btn-primary mybtn background text-dark w-100">Read Full Article</a>
        </div>
      </div>
    )
  }
}
