import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <p>Hello world</p>
      <Link href='/img'>
        <a>Get a random dog image!</a>
      </Link>
      <img src='/static/img-1.jpg' alt='my image' />
      <style jsx>{`
        img {
          width: 50vh;
          display: block;
        }
        div {
          background: white;
        }
        @media (max-width: 600px) {
          div {
            background: grey;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: grey;
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default index
