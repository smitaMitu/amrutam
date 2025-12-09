import Jointeam from "../../assets/jointeam.png"
import Teambg from "../../assets/teambg.png";
const JoinOurCircle = () => {
    const list = [
    {
      title: "Step 1: Get your referral code",
      desc: "Contact us to receive your unique referral code.",
    },
    {
      title: "Step 2: Register on Amrutam",
      desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
    },
    {
      title: "Step 3: Complete KYC",
      desc: "Fill in your details and upload the required documents for verification.",
    },
    {
      title: "Step 4: Start consulting",
      desc: "Once verified, begin offering consultations and helping patients.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-12 py-3">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {list.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-[16px] p-6 mb-3"
            >
              <h3 className="text-lg font-semibold text-[#3A643C] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center relative z-0">
        <img src={Teambg} alt="" className="absolute md:top-[-100px] top-[-40px]  -z-10 w-auto"/>
          <img
            src={Jointeam}
            alt="Section"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default JoinOurCircle