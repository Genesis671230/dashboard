import React from 'react'
import "./Swap.css"
import {  ConnectButton, NativeBalance, NFT } from 'web3uikit';
// import  {SwapWidget}  from '@uniswap/widgets'
// import '@uniswap/widgets/fonts.css'
// Infura endpoint
const jsonRpcEndpoint =  "https://mainnet.infura.io/v3/832b912552324b5087f85750df9852ea"


export default function Swap() {


  return (
    <div className="swap">
      
      {/* <div className="Uniswap">
    <SwapWidget
      provider={window.ethereum}
      jsonRpcEndpoint={jsonRpcEndpoint}
    />
  </div> */}
    
    <div className='swapTop'>

        <ConnectButton   chainId={1} signingMessage="Welcome to Koleidoken"/>
        <NativeBalance />
    </div>

    
        <div className='swapList'>

        <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="5003"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="5004"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="7805"
        />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="5503"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="7503"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="5893"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="5504"
      />
       <NFT
        address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        chain="eth"
        fetchMetadata
        tokenId="1248"
      />
      
          
        </div>
        
  </div>
  )
}
