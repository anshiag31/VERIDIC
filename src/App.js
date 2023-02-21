import axios from "axios";
import React from "react";
import Card from "./Card";
import './App.css'
import { useState,useEffect } from "react";

const baseURL = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

export default function App() {
  const [post, setPost] = useState(null);
  
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setLoading(false);
      
    }).catch(function (error) {
      if (error.response) {
       
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        
        console.log(error.request);
      } else {
        
        console.log('Error', error.message);
      }
  })}, []);

  if (!post) return null;

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <span></span>}
  
    
  <h1 id="heading">VERIDIC NEWSSS</h1>

       {post.map((p) => (
        <a href={p.link} target="_blank"><Card pos={p} key={p.id}></Card></a>
      )) 
    }
    </div>
  );
}