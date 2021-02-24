import React, { Component } from 'react'
import sachinImage from '../images/sachinImage.jpg'
import './style.css';
import {sachin_data} from './data';

export default class sachin extends Component {
    render() {
        return (
            <div>
               < img src={sachinImage} className="img"/>
                { sachin_data.map(post =>{
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
