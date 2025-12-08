import React from 'react'
import Img from "../assets/img.png";
import Gplay from "../assets/google-play.png";
import AppStore from "../assets/app-store.png";
import { Link } from 'react-router-dom';
const AppSection = () => {
    return (
        <div className='py-[30px]'>
            <div class="container mx-auto p-4 sm:p-8">

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div class=" order-2 lg:order-1">
                        <h2 class="text-[20px] md:text-[32px] font-bold text-gray-900 mb-4 md:leading-[50px]">Download Amrutam Ayurveda App Now</h2>
                        <p class="text-gray-700 mb-4">
                            The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
                        </p>
                        <ul class="list-disc list-inside text-gray-600 space-y-2">
                            <li>Feature 1: Detail A</li>
                            <li>Feature 2: Detail B</li>
                            <li>Feature 3: Detail C</li>
                        </ul>
                        <div className='flex gap-2 mt-8'>
                            <Link><img src={Gplay} alt='' className='w-[160px]'/></Link>
                            <Link><img src={AppStore} alt='' className='w-[160px]'/></Link>                           
                            
                        </div>
                    </div>

                    <div class="order-1 lg:order-2 flex justify-end">
                        <img src={Img} alt="Product Image on Right"
                            class="w-full h-auto max-h-96 lg:max-h-full object-cover md:w-[500px]" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppSection