import React from 'react'
import InfoList from './InfoList'
import Impact from './Impact'
import Benifits from './Benifits'
import Properties from './Properties'
import Formulation from './Formulation'
import Uses from './Uses'
import Plants from './Plants'

const Heading = ({ heading }) => {
    return (
        <>
            <p className='font-bold text-[16px] md:text-[24px] mb-3 font-(family-name:--ff)!'>{heading}</p>
        </>
    )
}
const Info = () => {
    return (
        <div className='flex flex-col gap-4 font-(family-name:--ff)!'>
            <h1 className='md:text-[40px]! text-[20px]! text-[var(--clr-neutral-1000)] leading-[30px]! md:leading-[60px]! font-bold'>Citrak - Plumbago zeylancia  <br />
                (Sanskrit - चित्रक)</h1>
           
            <p className='md:text-[24px] text-[16px] text-[#161616] leading-7'>Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain.</p>
            <div className='mb-4'>
                <Heading heading={"Why Chitrak ?"} />
                <InfoList />
            </div>
            <div className='mb-4'>
                <Heading heading={"Prakriti Impact"} />
                <Impact/>
            </div>
            <div className='mb-4'>
                <Heading heading={"Benefits"} />
                <Benifits />
            </div>
             <div className='mb-4'>
                <Heading heading={"Ayurvedic Properties"} />
                <Properties/>
            </div>
            <div className='mb-4 bg-[#FFE9CB] rounded-2xl md:rounded-none p-4 py-4 md:bg-transparent md:p-0'>
                <Heading heading={"Important formulations"} />
                <Formulation />
            </div>
            <div className='mb-4 bg-[#FFE9CB] rounded-2xl md:rounded-none p-4 py-4 md:bg-transparent md:p-0'>
                <Heading heading={"Therapeutic uses"} />
                <Uses />
            </div>
            <div className='mb-4 md:rounded-none md:bg-transparent md:p-0'>
                <Heading heading={"Plant parts and its purpose"} />
                <Plants />
            </div>
            <div className='mb-4 py-4 md:bg-transparent md:p-0'>
                <p className='font-bold text-[16px] md:text-[24px] mb-1 font-(family-name:--ff)!'>Best combined with</p>
                <p className="text-[14px] md:text-[14px] leading-[1.5] font-normal">Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy,</p>
            </div>
        </div>
    )
}

export default Info