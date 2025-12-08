import React from 'react'
import SearchSection from '../components/SearchSection'
import AppSection from '../components/AppSection'
import IngredientInfo from '../components/IngredientDetail/IngredientInfo'
import Info from '../components/IngredientDetail/Info'

const Ingredients = () => {
  return (
    <main >
      <SearchSection title={"shop"} />
      <div className='container'>

        <div className='flex flex-col md:flex-row gap-6 max-w-full'>
            <IngredientInfo/>
            <Info />
        </div>
      </div>
        
      <AppSection/>

    </main>
  )
}

export default Ingredients