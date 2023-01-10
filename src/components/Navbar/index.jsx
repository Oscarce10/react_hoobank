import React, { useState } from 'react';
import {
    airbnb,
    close,
    menu,
    logo,
} from '../../assets/images/index';
import { navLinks } from '../../constants/index';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`
                            font-poppins 
                            font-normal 
                            cursor-pointer 
                            test-[16px]
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                            text-white 
                        `}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <span
                    role="button"
                    tabIndex={0}
                    onKeyPress={(event) => setToggle((prev) => (event.key === 'Enter' ? !prev : prev))}
                    className="sm:hidden flex flex-1 justify-end items-center"
                    onClick={() => setToggle((prev) => !prev)}
                >
                    <img
                        src={toggle ? close : menu}
                        alt=""
                        className="w-[28px] h-[28px] object-contain"
                    />
                </span>
                <div
                    className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`
                            font-poppins 
                            font-normal 
                            cursor-pointer 
                            test-[16px]
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                            text-white 
                        `}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
