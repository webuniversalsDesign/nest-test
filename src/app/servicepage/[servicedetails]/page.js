"use client"
import Link from 'next/link';
import React from 'react';

const servicedetails = ({params}) => {
    // console.log(params)
  return (
    <>
     <h5>This is our {params.servicedetails}</h5> 
     <Link href="/">Go back to Home page</Link> <br/>
     <Link href="/servicepage">Go back to Our Service page</Link>
    </>
  )
}

export default servicedetails;
