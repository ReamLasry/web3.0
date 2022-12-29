import React, { useContext } from "react";

import { AiFillPlayCircle } from "react-icons/ai"; //UTILL
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from "./";

// STYLE COMPONENT
const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';
// INPUT COMPONENT
const Input = ({ placeHolder, name, type, value, handleChange }) => (
    <input
        placeholder={placeHolder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => { handleChange(e, name) }}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm blue-glassmorphism"
    />
);

const welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSUBMIT = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        //REFRESH PREVENTING AFTER FORM SUBMIT
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 jusify-start flex-col mf:mr-10">
                    <h1 id="welcome-title" className=" text-5xl sm:text-5xl text-[#FFD700] py-1">
                        {/* SEND CRYPTO ALL OVER THE WORLD */}
                        EARN CRYPTO WITH TIME
                    </h1>

                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row hover:text-white justify-center items-center my-5 bg-[#F3A216] p-3 rounded-md cursor-pointer hover:bg-[#D19329] w-full"
                        >
                            <p>
                                CONNECT YOUR WALLET
                            </p>
                        </button>
                    )}

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            RELIABILITY
                        </div>
                        <div className={commonStyles}>
                            SECURITY
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            ETHEREUM
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            WEB 3.0
                        </div>
                        <div className={commonStyles}>
                            24/7 SUPPORT
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            LOW FEES
                        </div>
                    </div>
                </div>

                {/* CARD */}
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#000000" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#000000" />
                            </div>

                            <div>
                                <p className="text-black text-sm font-semibold">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-black text-lg font-bold mt-1">
                                    ETHEREUM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input
                            placeHolder="Address To"
                            name="addressTo"
                            type="text"
                            handleChange={handleChange}
                        />
                        <Input
                            placeHolder="Amount of ETH"
                            name="amount"
                            type="number"
                            handleChange={handleChange}
                        />
                        <Input
                            placeHolder="Keyword (GIF)"
                            name="keyword"
                            type="text"
                            handleChange={handleChange}
                        />
                        <Input
                            placeHolder="Message"
                            name="message"
                            type="text"
                            handleChange={handleChange}
                        />

                        <div className="h-[1px] w-full bg-gray-200 my-2" />
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSUBMIT}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#ffff] hover:border-[#FFD700] hover:text-[#FFD700] rounded-full cursor-pointer"
                            >
                                S E N D
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default welcome;