import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      articles:[],
      totalResults:0
    }
  }
  async getAPIData(){
  let response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&sortBy=publishedAt&apiKey=d61e7742397a4f11b8fd57e8e29498ce`)
 response=await response.json()
 this.setState({
  articles:response.articles,
  totalResults:response.totalResults
 })
   
}
componentDidMount(){
  this.getAPIData()
}
componentDidUpdate(prevPros){
  if(prevPros!==this.props)
    this.getAPIData()
}
  render() {
    return (
      <div className='container-fluid'>
        <h5 className='background text-center p-2 my-2'>{this.props.q}News Articles</h5>
        <div className="row">
         {
          this.state.articles?.map((item,index)=>{
            return<div key={index} className='col-xxl-2 col-lg-3 col-md-4 col-sm-6'>
              <NewsItem
              title={item.title}
              source={item.source.name}
              date={item.publishedAt}
              pic={item.urlToImage}
              description={item.description}
              url={item.url}
              />
            </div>
          })
         }
        </div>
      </div>
    )
  }
}
