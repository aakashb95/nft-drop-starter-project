import React, { useEffect } from 'react'
import './App.css'
import twitterLogo from './assets/twitter-logo.svg'

// Constants
const TWITTER_HANDLE = 'aakashb_95'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const App = () => {
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window
      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom Wallet found')

          const response = await solana.connect({ onlyIfTrusted: true })
          console.log(
            'Connected to Phantom Wallet',
            response.publicKey.toString(),
          )
        } else {
          alert('Get a phantom wallet to use this app')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default App
