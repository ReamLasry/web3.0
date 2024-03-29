import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

import useFetch from '../hooks/useFech';
import dummyData from '../utils/dummyData'; //UTILL

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })

    return (
        <div className='
            bg-[#181918] m-4
            flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3
            rounded-md
            hover:shadow-2xl'
        >
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a
                        href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <div>
                            <p className='font-bold text-white text-base'>
                                SENT FROM:
                            </p>
                            <p className='text-white text-base hover:underline'>
                                {shortenAddress(addressFrom)}
                            </p>
                        </div>
                    </a>

                    <a
                        href={`https://ropsten.etherscan.io/address/${addressTo}`}
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <div>
                            <p className='font-bold text-white text-base'>
                                SENT TO:                        </p>
                            <p className='text-white text-base hover:underline'>
                                {shortenAddress(addressTo)}
                            </p>
                        </div>
                    </a>

                    <p className='font-bold text-white text-base'>
                        AMOUNT: {amount} ETH
                    </p>
                    {message && (
                        <>
                            <br />
                            <p className='text-white text-base'>
                                MESSAGE: {message}
                            </p>
                        </>
                    )}
                </div>

                <img
                    src={gifUrl || url}
                    alt="GIF"
                    className='w-full h-64 2x:h-90 rounded-md shadow-lg object-cover'
                />

                <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                    <p className='text-[#FFD700] font-bold'>
                        {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-[#FFD700] text-3xl text-center my-2'>
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className='text-[#FFD700] text-3xl text-center my-2'>
                        CONNECT YOUR ACCOUNT TO SEE THE LATEST TRANSACTIONS
                    </h3>
                )}

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard
                            key={i} {...transaction}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions;