import React from 'react'
import DoctorsBanner from '../components/FindDoctors/DoctorsBanner'
import Clients from '../components/FindDoctors/Clients'
import Header from '../components/FindDoctors/Header'
import WhyChoose from '../components/FindDoctors/WhyChoose'
import JoinOurCircle from '../components/FindDoctors/JoinOurCircle'
import Accordion from '../components/Accordion'
import TabSection from '../components/FindDoctors/TabSection'
import DoctorsCards from '../components/FindDoctors/DoctorCards'
const faqs = [
    {
        question: "What is your return policy?",
        answer:
            "You can return any product within 7 days of delivery if it is unused and in original packaging."
    },
    {
        question: "How long does shipping take?",
        answer:
            "Shipping usually takes 3–5 business days depending on your location."
    },
    {
        question: "Do you offer cash on delivery?",
        answer:
            "Yes, we offer Cash on Delivery (COD) on selected products and locations."
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Yes, all transactions are encrypted and processed through secure payment gateways."
    },
    {
        question: "How can I contact customer support?",
        answer:
            "You can contact our support team via email or live chat available on our website."
    }
];
const FindDoctors = () => {
  return (
    <main>
      <DoctorsBanner />
      <div className='space-y-3'>
        <Header title={"Why Doctors Choose Us?"} text={"Unlock the Benefits of Smarter Healthcare Management and Patient Care"} />
        <WhyChoose />
      </div>
      <div className='space-y-3'>
        <Header title={"Join Our Circle of Care"} text={"Becoming a part of Amrutam is simple"} />
        <JoinOurCircle />
      </div>
      <div className='space-y-3'>
        <div className='md:flex gap-3 justify-center hidden'>
          <button >Consultations</button>
          <button className='transparent'>Payment withdrawal </button>
          <button className='transparent'>Schedule</button>
        </div>
        <TabSection/>
      </div>
      <div className='space-y-3'>
        <Header title={"What other Ayurvedic Doctors are Saying"} text={"Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!"} />
        <DoctorsCards />
        
      </div>
      <div className='space-y-3'>
        <Header title={"Frequently Asked Questions"} text={"Find quick answers to common questions to help you navigate the app and its features easily."} />
        <div className='container max-w-5xl'>
            <Accordion faq={faqs} />
        </div>
        
      </div>
    </main>

  )
}

export default FindDoctors