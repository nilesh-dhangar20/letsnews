import React from 'react';
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import TimeAt from './TimeAt';
const NewsCard = (props) => {

    return (
        <>
             
               <div className="container newsCard_div mt-4 mb-4">
                   <div className="row">
                       <div className="col col-md-5 col-sm-12 order-sm-0 col-12 mb-sm-2 img_div_newscard">
                       <img src={props.image} alt="image"/>
                      
                       </div>
                       <div className="col col-md-6 col-sm-12 order-sm-1 mt-1 mb-1">
                          <h3 className="text-black text-dark">{props.title}</h3>
                       
                          <p>{props.discription}</p>
                          <p>{props.content}</p>
                          <p> by  {props.auther}</p>
                         
                          
                          <TimeAt publishAt={props.publishAt}  className="me-3"/>
                          <a href={`${props.url}`} target="_blank"  className="ms-3">ReadMore</a>
                          
                       </div>
                   </div>
               </div>
               
        </>
    )

}

export default NewsCard
