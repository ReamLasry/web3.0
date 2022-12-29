import logo from '../../images/logo.png';

const footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className='flex flex-[0.5] justify-center itmes-center' >
                    <img
                        src={logo}
                        alt="LOGO"
                        className='w-32'
                    />
                </div>

                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <p className='text-[#FFD700] font-bold text-base text-center mx-2 cursor-pointer'>MARKET</p>
                    <p className='text-[#FFD700] font-bold text-base text-center mx-2 cursor-pointer'>EXCHANGE</p>
                    <p className='text-[#FFD700] font-bold text-base text-center mx-2 cursor-pointer'>TUTORIALS</p>
                    <p className='text-[#FFD700] font-bold text-base text-center mx-2 cursor-pointer'>WALLETS</p>
                </div>
            </div>

            <div className='flex justify-center itmes-center flex-col mt-5'>
                <p className='text-white font-bold text-sm text-center'>
                    JOIN US
                </p>
                <p className='text-white font-bold text-sm text-center'>
                    info@cryptrade.com
                </p>
            </div>

            <div className='sm:w-[90%] w-full h-[0.25px] bg-white mt-5' />

            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className='text-white font-bold text-sm text-center'>@crypTrade 2022</p>
                <p className='text-white font-bold text-sm text-center'>All rights reserved</p>
            </div>
        </div>
    );
}
export default footer;