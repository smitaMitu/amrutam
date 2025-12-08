import React from 'react'
import SearchSection from '../components/SearchSection'
// import ProductsList from '../components/Cards/ProductsList'

const Homepage = () => {
  return (
    <main >
      <SearchSection title={"store"} />
      <div className='container'>
        {/* <ProductsList /> */}
      </div>
    </main>
  )
}

export default Homepage