import React, { useEffect, useRef, useState } from 'react'
import starlinkimg from '../assets/img/starlink.jpg'

const Starlink = () => {
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
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat h-screen relative"
                style={{ backgroundImage: `url(${starlinkimg})` }}>
                <div ref={elementRef} className="absolute left-8 bottom-10 lg:left-12 lg:bottom-32 mb-8 text-left animate-fade-up">
                    <p className=' text-md lg:text-xl font-normal text-white'> UPCOMING LAUNCH </p>
                    <h1 className="text-white text-3xl lg:text-4xl  font-bold mb-4">STARLINK MISSION</h1>
                    <button className="btn2 text-white mt-5 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black" type="button">
                        <span className="absolute inset-0 bg-white"></span>
                        <span className="absolute inset-0 flex justify-center items-center font-bold">
                            watch
                        </span>
                        watch
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Starlink
