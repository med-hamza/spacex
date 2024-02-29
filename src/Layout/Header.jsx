import React, { useEffect, useRef, useState } from 'react';
import crewsunset from '../assets/img/crew.jpg';
import logo from '../assets/img/logo_spacex.svg'
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Header = () => {

    const elementRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-up');
                    } else {
                        entry.target.classList.remove('animate-fade-up');
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

        setPrevScrollPos(currentScrollPos);
        setNavbarVisible(visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, navbarVisible]);

    const isTop = window.pageYOffset < 10;

    const navbarStyles = {
        position: isTop ? 'relative' : 'fixed',
        width: '100%',
        margin: isTop ? '0 auto' : '0',
        textAlign: isTop ? 'left' : 'none',
        backgroundColor: navbarVisible && !isTop ? '#000' : 'transparent',
        transition: 'background-color 0.3s, top 0.3s',
        top: navbarVisible ? '0' : '-100px',
        zIndex: '10',
    };


    return (
        <header className="bg-cover bg-center bg-no-repeat h-screen relative"
            style={{ backgroundImage: `url(${crewsunset})` }}>
            <nav style={navbarStyles} className="flex justify-between items-center pt-6 px-8 py-8 lg:px-16 lg:py-6 ">
                <div className='flex items-center justify-start gap-5'>
                    <img src={logo} alt="SpaceX Homepage" className=' w-52 h-auto' />
                    <div className='hidden md:hidden lg:flex justify-center gap-5 items-center mt-3 size1000'>
                        <Link to="/" className="bottom-link text-white text-sm font-bold uppercase">FALCON 9</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">FALCON HEAVY</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">DRAGON</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">STARSHIP</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">HUMAN SPACEFLIGHT</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">RIDESHARE</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">STARSHIELD</Link>
                        <Link to="/" className="bottom-link text-white text-xs font-bold uppercase">STARLINK</Link>
                    </div>
                </div>
                <div className='flex justify-center mt-3'>
                    <Menu />
                </div>
            </nav>
            <div ref={elementRef} className="absolute left-8 bottom-10 lg:left-12 lg:bottom-32 mb-8 text-left">
                <p className=' text-md lg:text-xl font-normal text-white'> UPCOMING LAUNCH </p>
                <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4">CREW-8 MISSION</h1>
                <button className="btn2 text-white mt-5 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black" type="button">
                    <span className="absolute inset-0 bg-white"></span>
                    <span className="absolute inset-0 flex justify-center items-center font-bold">
                        watch
                    </span>
                    watch
                </button>
            </div>
            <div className='hidden sm:block relative sm:absolute sm:bottom-5 sm:left-1/2 sm:transform sm:translate-x-[-50%] sm:translate-y-[-50%]'>
                <div className="mouse"></div>
                <div className="arrow-scroll">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
