import React, { useEffect } from 'react'
import gsap from 'gsap';
import InfiScroll from './InfiScroll';

function HTMLcontent() {

    useEffect(()=>{
        gsap.to("#title1", {opacity: 1, delay:4, duration: 2});
        gsap.to("#title1", {opacity: 0, delay:6, duration: 2});
        gsap.to("#title1", {display:"none", delay:7, duration: 2});
        gsap.to("#title2", {display: "block", delay:9, duration: 1});
        gsap.to("#title2", {opacity:0, delay:12, duration: 3});
        gsap.to("#title2", {display:"none",delay:14, duration: 1});
        gsap.to(".scrollcontainer", {display:"block",delay:14, duration: 1});
        gsap.to(".scrollcontainer", {opacity: 1,delay:15, duration: 3});
      },[])
  return (
    <>
    <div className='container'> 
      <div className='contentcontainer'>
        <div  className='scrollcontainer'>
            <InfiScroll/>
        </div>
            
        <h1 id="title1">We love Gaming</h1>
        <h1 id="title2">Lets Scroll</h1>
      </div>          
    </div>
</>
  )
}

export default HTMLcontent