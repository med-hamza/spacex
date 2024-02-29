import React, { useEffect, useRef, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className={`  ${open ? "" : ""}  right-3 lg:right-11 top-7 absolute  z-20 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none`}
            >
                {open ? <IoMdClose className='text-white text-3xl' /> : <IoMdMenu className='text-white  text-3xl' />}
            </button>

            <nav
                ref={menuRef}
                className={`flex flex-col space-y-4  bg-black px-6  lg:px-12  py-24 fixed top-0 right-0 h-full transform transition-transform duration-500 ease-in-out  ${open ? 'translate-x-0' : 'translate-x-full'} w-3/4 md:w-1/2 lg:w-1/5`}
            >
                <Link to="/" className="text-end text-white text-md font-normal  border-b  border-[#252525] pb-2 uppercase">FALCON 9</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">FALCON HEAVY</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">DRAGON</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">STARSHIP</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">HUMAN SPACEFLIGHT</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">RIDESHARE</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">STARSHIELD</Link>
                <Link to="/" className="text-end text-white text-md font-normal  border-b border-[#252525]  pb-2 uppercase">STARLINK</Link>
            </nav>
        </>
    );
};

export default Menu;
