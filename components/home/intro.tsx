'use client'
import { useEffect, useRef } from 'react';

const Intro = () => {
    const introRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-right');
                }
            });
        });

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => {
            if (introRef.current) {
                observer.unobserve(introRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-neutral">
            <div className="p-10 w-3/4" ref={introRef}>
                <h1 className="text-primary text-5xl">A universal profile for all your Sim Racing Activities</h1>
                <h1 className="text-accent text-5xl mt-5">Share. Play. Connect. Repeat. </h1>
            </div>
        </div>
    );
};

export default Intro;