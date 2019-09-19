import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Img = ({ img, status }) => {
  return (
    <>
      <Link href='/'>
        <a>Go back!</a>
      </Link>
      <div>Img status: {status}</div>
      <img src={img} alt='img' style={{ maxWidth: '500px' }} />
    </>
  )
}

Img.getInitialProps = async ({ req }) => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const json = await res.json()
  return { img: json.message, status: json.success }
}

export default Img
