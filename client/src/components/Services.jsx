import { BsShieldCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`} >
            {icon}
        </div>
      
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);

const services = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
            <div className="flex-mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-[#FFD700] text-3xl sm:text-5xl py-2 text-gradient">
                        WE ARE HERE FOR YOU | YOU ARE HERE FOR US
                    </h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#FFD700]"
                    title="SECURITY GUARANTEED"
                    icon={<BsShieldCheck fontSize={21} className="text-black" />}
                    subtitle="Security is guranted. We always maintain privacy and mainting the quality of our products."
                />
                
                <ServiceCard
                    color="bg-[#FFD700]"
                    title="BEST EXCHANGE RATES"
                    icon={<BiSearchAlt fontSize={21} className="text-black" />}
                    subtitle="Security is guranted. We always maintain privacy and mainting the quality of our products."
                />
                
                <ServiceCard
                    color="bg-[#FFD700]"
                    title="FASTEST TRANSACTIONS"
                    icon={<RiHeart2Fill fontSize={21} className="text-black" />}
                    subtitle="Security is guranted. We always maintain privacy and mainting the quality of our products."
                />
            </div>
        </div>
    )
}

export default services;