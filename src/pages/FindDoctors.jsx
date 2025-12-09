import React from 'react'
import DoctorsBanner from '../components/FindDoctors/DoctorsBanner'
import Clients from '../components/FindDoctors/Clients'
import Header from '../components/FindDoctors/Header'
import WhyChoose from '../components/FindDoctors/WhyChoose'

const FindDoctors = () => {
  return (
    <main>
      <DoctorsBanner />
      <div className='space-y-3'>
        <Header title={"Why Doctors Choose Us?"} text={"Unlock the Benefits of Smarter Healthcare Management and Patient Care"} />
        <WhyChoose />
      </div>
    </main>

  )
}

export default FindDoctors