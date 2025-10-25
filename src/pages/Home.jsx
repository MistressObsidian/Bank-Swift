import React from 'react'
import logo from '../../bank-swift.svg'

export default function Home() {
  return (
    <main>
      <header style={{display:'flex',alignItems:'center',gap:12}}>
        <img src={logo} alt="Bank Swift" style={{height:48}}/>
        <h1>Bank Swift</h1>
      </header>
      <p>Placeholder home page — replace with index.html content.</p>
    </main>
  )
}
