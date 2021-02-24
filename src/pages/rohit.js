import React, { Component } from 'react'
import rohitImage from '../images/rohitImage.jpg'
import './style.css';
import {rohit_data} from './data';

export default class rohit extends Component {
    render() {
        return (
            <div>
               < img src={rohitImage} className="img"/>
               {rohit_data.map(post =>{
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
