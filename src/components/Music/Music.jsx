import React from 'react'
import { Container } from 'react-bootstrap'
import Album from './Album'
import "./music.css"
import { productsArr } from '../../Assets/Albums'

function Music() {
  return (
    < > 
    <Container className='text-center'>
        <h2 className=' mt-2 p-2 Music_logo'>Music</h2>
    </Container>
    <Container className='row row-cols-2  mx-auto'>
        {productsArr.map(item=>{
        return <Album
         title={item.title}
         price={item.price}
         Imgurl={item.imageUrl}
         id={item.id}
          />
        })}
    </Container>
    </ >
  )
}

export default Music