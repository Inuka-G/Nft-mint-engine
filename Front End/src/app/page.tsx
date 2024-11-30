
import React from 'react'
import PosRightSection from './Components/PosRightSection'
import PosleftSection from './Components/PosleftSection'

const Home = () => {
  return (
    <div className="posScreen grid grid-cols-[2.5fr_1fr] w-full h-[calc(100vh-80px)]">

      <PosleftSection />
      <PosRightSection />

    </div>
  )
}

export default Home