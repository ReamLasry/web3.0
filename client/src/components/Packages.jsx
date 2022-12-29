import React, { useContext } from "react";
import { useState } from 'react';
import { newContractABI, newContractAddress } from '../utils/constants';
import { ethers } from 'ethers';

// const getInvestContract = () => {
//     const { ethereum } = window;
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const web3 = new Web3(provider)
//     const signer = provider.getSigner();
//     const investContract = new web3.eth.Contract(newContractAddress, newContractABI);
//     // const investContract = new ethers.Contract(newContractAddress, newContractABI);

//     return investContract;
// }
const getInvestContract = () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
        newContractAddress,
        newContractABI,
        signer
    );
    return contract;
}

const Maslul = ({ dailyEarnings, totalRoi, numOfDays, inputId, buttonId, val, onChangeFunc, handleFunc }) => (
    <div className="p-3 outline-white text-white white-glassmorphism ml-20 w-50 mt-10">
        <div className="flex">
            <p className="flex-1 text-left">
                DAILY EARNINGS
            </p>
            <p className="font-bold flex-1 text-right">
                {dailyEarnings}
            </p>
        </div>
        <div className="flex">
            <p className="flex-1 text-left">
                TOTAL ROI
            </p>
            <p className="flex-1 text-right">
                {totalRoi}
            </p>
        </div>
        <div className="text-center h-24 pt-5">
            {`${numOfDays} DAYS`}
        </div>
        <div className="flex">
            <div className="flex-2 pr-3">
                <p className="text-gray-500 text-xs">
                    ENTER AMOUNT
                </p>
                <input id={inputId} onChange={onChangeFunc} min={0.00000} step={0.00001} className="focus:outline-none rounded-tr-lg rounded-br-lg w-full bg-slate-800" type="number" />
            </div>
            <div className="flex-1">
                <p className='text-xs text-right'>

                    {`ROI IN ${numOfDays} DAYS`}
                </p>
                <p className='text-right'>
                    {val || '0.00'}
                </p>
            </div>
        </div>
        <div className='text-center p-3'>
            <button id={buttonId} onClick={handleFunc} className='hover:text-[#FFD700]'>
                I N V E S T
            </button>
        </div>
    </div >
);

const Packages = () => {

    const [referrer, setReferrer] = useState();
    if (!referrer) {
        const url = window.location.href
        const ref = url.includes("?ref=")

        if (ref) {
            const index = url.indexOf("?ref=")
            const referrer = url.substring(index + 5)
            setReferrer(referrer);
        }
        else {
            setReferrer('0x7953B64d3c69A15B7D971f134a4c346BBBbdbd8b');
        }
    }

    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [currentAccount, setCurrentAccount] = useState('');

    const sendInputValue = (event) => {
        const userValue = event.target.value;
        const inputNum = parseFloat(event.target.id);

        const earningDifference = 1.45;
        const userCalculateValue = userValue * earningDifference;

        switch (inputNum) {
            case 1:
                if (userValue.toString().length > 7) {
                    setValue('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }
                !userValue ? setValue('0.00') : setValue(userCalculateValue);
                break;

            case 2:
                if (userValue.toString().length > 7) {
                    setValue2('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue2(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }

                !userValue ? setValue2('0.00') : setValue2(userCalculateValue);
                break;

            case 3:
                if (userValue.toString().length > 7) {
                    setValue3('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue3(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }
                !userValue ? setValue3('0.00') : setValue3(userCalculateValue);
                break;

            case 4:
                if (userValue.toString().length > 7) {
                    setValue4('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue4(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }
                !userValue ? setValue4('0.00') : setValue4(userCalculateValue);
                break;

            case 5:
                if (userValue.toString().length > 7) {
                    setValue5('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue5(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }
                !userValue ? setValue5('0.00') : setValue5(userCalculateValue);
                break;

            case 6:
                if (userValue.toString().length > 7) {
                    setValue6('NaN');
                    return
                };

                if (userCalculateValue.toString().length > 5) {
                    const dot = userCalculateValue.toString().indexOf(".");
                    setValue6(userCalculateValue.toString().slice(0, dot + 4));
                    return;
                }
                !userValue ? setValue6('0.00') : setValue6(userCalculateValue);
                break;
        }
    }

    // const sendInvest = async (val, planNum) => {


    //     try {
    //         if (!ethereum) return alert('Please install Metamask');

    //         const accounts = await ethereum.request({ method: 'eth_accounts' });
    //         if (accounts.length) {
    //             setCurrentAccount(accounts[0]);

    //         } else {
    //             console.log('No accounts found');
    //         }
    //     } catch (error) {
    //         throw new Error('No accounts found.')
    //     }


    //     if (!val || val.toString().length > 7) return;
    //     const amountWei = val * 10 ** 18;
    //     const newContract = getInvestContract();
    //     console.log(newContract);
    //     // return;

    //     await newContract.invest(referrer, planNum)
    //         .send({ from: currentAccount, value: amountWei })
    //         .then(res => { console.log('success', res) })
    //         .catch(err => { console.log(err) })

    // }

    const sendInvest = async (val, planNum) => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);

            } else {
                console.log('No accounts found');
            }
        } catch (error) {
            throw new Error('No accounts found.')
        }
        if (!val || val.toString().length > 7) return;
        try {
            const amountWei = ethers.utils.parseEther(String(val)).toHexString();
            const newContract = getInvestContract();
            console.log(newContract.invest);

            const res = await newContract.invest(referrer, planNum, { from: currentAccount, value: amountWei })
            console.log('success', res)
        } catch (error) {
            console.log(error)
        }

    }

    const handleInvestSUBMIT = (e) => {
        //REFRESH PREVENTING AFTER FORM SUBMIT
        e.preventDefault();

        const transactionVal = parseFloat(e.target.id);

        switch (transactionVal) {
            case 11:
                var currVal = parseFloat(document.getElementById('1').value);
                sendInvest(currVal, 0);
                break;

            case 12:
                var currVal = parseFloat(document.getElementById('2').value);
                sendInvest(currVal, 1);
                break;

            case 13:
                var currVal = parseFloat(document.getElementById('3').value);
                sendInvest(currVal, 2);
                break;

            case 14:
                var currVal = parseFloat(document.getElementById('4').value);
                sendInvest(currVal, 3);
                break;

            case 15:
                var currVal = parseFloat(document.getElementById('5').value);
                sendInvest(currVal, 4);
                break;

            case 16:
                var currVal = parseFloat(document.getElementById('6').value);
                sendInvest(currVal, 5);
                break;
        }

    }

    return (
        <div className="flex flex-wrap w-full gradient-bg-packages text-white w-full justify-center item-center">
            {/* OPENED PLANS */}
            <Maslul
                dailyEarnings="12.5 %"
                totalRoi="150%"
                numOfDays="12"
                inputId="1"
                buttonId="11"
                val={value}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />
            <Maslul
                dailyEarnings="11.5 %"
                totalRoi="172.5%"
                numOfDays="15"
                inputId="2"
                buttonId="12"
                val={value2}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />
            <Maslul
                dailyEarnings="11 %"
                totalRoi="198%"
                numOfDays="18"
                inputId="3"
                buttonId="13"
                val={value3}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />

            {/* CLOSED PLANES */}
            <Maslul
                dailyEarnings="10 %"
                totalRoi="313.8%"
                numOfDays="12"
                inputId="4"
                buttonId="14"
                val={value4}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />
            <Maslul
                dailyEarnings="9 %"
                totalRoi="364.2%"
                numOfDays="15"
                inputId="5"
                buttonId="15"
                val={value5}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />
            <Maslul
                dailyEarnings="8 %"
                totalRoi="303.8%"
                numOfDays="18"
                inputId="6"
                buttonId="16"
                val={value6}
                onChangeFunc={sendInputValue}
                handleFunc={handleInvestSUBMIT}
            />
            <br />
            {/* <div>
                HELLO WALLET NUMBER {currentAccount}
            </div> */}
        </div>
    )
}

export default Packages;