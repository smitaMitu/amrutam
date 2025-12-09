import React from 'react'
import BannerImg from "../../assets/doctor-banner.png";
import bannerBg from "../../assets/banner-bg.png";
const DoctorsBanner = () => {
    return (
        <div className='bg-[#FFF6DD] relative z-0 overflow-hidden'>
            <div className='absolute left-0 top-0 -z-1'><img src={bannerBg} alt='' /></div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    
                    <div className="flex flex-col md:gap-4 gap-2">

                       
                        <p className="text-sm text-gray-500">
                            For Health Practitioners
                        </p>

                        
                        <h1 className="text-[24px]! md:text-[35px]! font-extrabold text-black leading-tight text-[#0C0C0C]">
                            Join Amrutam –&nbsp;
                            <span className="text-[#3A643C]">Grow Your Practice</span>
                        </h1>

                        
                        <p className="text-base" style={{color:"#666666"}}>
                            Partner with us to expand your reach, connect with more clients, and build a stronger healthcare presence online.
                        </p>

                        
                        <button className="bg-green-600 text-white px-9! py-3 rounded-xl! hover:bg-green-700 transition w-[200px]!">
                            Join Now
                        </button>

                        
                        <div className="grid grid-cols-2 gap-6 items-start mt-6 relative w-[250px]">

                           
                            <div className='w-auto text-center'>
                                <h3 className="text-xl font-semibold text-black">500+</h3>
                                <p className="text-sm text-gray-500">
                                    Average Active Users
                                </p>
                            </div>

                            
                            <div className="absolute hidden md:block h-16 w-px bg-gray-300 left-1/2"></div>

                            
                            <div className='w-auto text-center'>
                                <h3 className="text-xl font-semibold text-black">40+</h3>
                                <p className="text-sm text-gray-500">
                                    Average daily free calls
                                </p>
                            </div>

                        </div>

                    </div>

                    
                    <div className="flex justify-center">
                        <img
                            src={BannerImg}
                            alt="Banner Image"
                            className="w-full max-w-md rounded-xl object-cover"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DoctorsBanner