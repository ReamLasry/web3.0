import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';
import React from 'react';

const NavBarItems = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <nav className="w-full flex md:justify-left justify-between items-center p-3">

            {/* WEB LOGO */}
            <div className='md:flex-[0.5] flex-initial justify-center item-center  mx-auto'>
                <img src={logo} alt="logo" className='w-32' />
            </div>

            {/* MENU */}
            <ul className='text-red-200 md:flex hidden list-none flex-row justify-between items-center flex-inital'>
                {["MARKET", "EXCHANGE", "TUTORIALS", "WALLETS"].map((item, index) => (
                    <NavBarItems key={item + index} title={item} />
                ))}
            </ul>

            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["MARKET", "EXCHANGE", "TUTORIALS", "WALLETS"].map((item, index) => (
                            <NavBarItems key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}
export default NavBar;