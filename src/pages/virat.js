import React, { Component } from 'react'
import viratImage from '../images/viratImage.jpg'
import './style.css';
import {virat_data} from './data';

export default class virat extends Component {
    render() {
        return (
            <div>
               < img src={viratImage} className="img"/>
               {virat_data.map(post =>{
                  return(
                      <>
                     <h1>{post.title}</h1> 
                      <p>{post.content}</p>
                      </>
                  )
              })}
            
            
            </div>
        )
    }
}
