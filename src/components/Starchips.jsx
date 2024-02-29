import React, { useEffect, useRef } from 'react'

const Starchips = () => {
    const videoSrc = "https://www.youtube-nocookie.com/embed/1lU0NAN2XpY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=1lU0NAN2XpY&modestbranding=1&iv_load_policy=3&cc_load_policy=0";
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
        <div className='relative' style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
                src={videoSrc}
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                title="Embedded youtube"
            />
            <div ref={elementRef} className="absolute left-8 bottom-3 lg:left-12 lg:bottom-60 mb-2 text-left">
                <p className='text-md lg:text-xl font-normal text-white'> RECENT LAUNCH </p>
                <h1 className="text-white text-xl lg:text-4xl  font-bold mb-4">STARSHIP'S SECOND  <br /> FLIGHT TEST</h1>
                <button className="btn2 text-white mt-2 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black" type="button">
                    <span className="absolute inset-0 bg-white"></span>
                    <span className="absolute inset-0 flex justify-center items-center font-bold">
                        learn more
                    </span>
                    learn more
                </button>
            </div>
        </div>
    );
};

export default Starchips
