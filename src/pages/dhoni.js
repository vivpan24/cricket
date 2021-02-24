import React, { Component } from 'react'
import dhoniImage from '../images/dhoniImage.jpg';
import './style.css';
import {dhoni_data} from './data';

export default class dhoni extends Component {
    render() {
        return (
            <div>
               <img src={dhoniImage} className="img" alt="dhoni image"/>

                {dhoni_data.map(post =>{
                  return(
                      <>
                     <h1>{post.title}</h1> 
                      <p>{post.content}</p>
                    </>
                  )
              })}
            </div>
        );
    }
}

