"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0)');

    useEffect(() => {
        const updateScrollPosition = () => {
            const scrolled = window.scrollY;
            setScrollPosition(scrolled);
        };

        window.addEventListener('scroll', updateScrollPosition);

        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    useEffect(() => {
        const handleBackgroundColor = () => {
            // Adjust these values to control the transition range and opacity levels
            const threshold = 200; // Amount of scroll needed for full opacity change
            const baseOpacity = 0; // Starting opacity for bg-zinc-950
            const maxOpacity = 0.9; // Maximum opacity for bg-zinc-950
            const opacity = Math.min(maxOpacity, baseOpacity + (scrollPosition / threshold) * (maxOpacity - baseOpacity));
            return `rgba(9, 9, 11, ${opacity})`;
        };

        setBackgroundColor(handleBackgroundColor());
    }, [scrollPosition]);

    useEffect(() => {
        console.log(backgroundColor);
    }, [backgroundColor]);

    return (
        <div className="fixed w-full z-10">
            <div className="m-5">
                <div className={`flex justify-center rounded-lg backdrop-blur-sm`} style={{ backgroundColor: backgroundColor }}>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">
                                <Image
                                    className=" -ml-1"
                                    src="/logo.png"
                                    alt="Next.js Logo"
                                    width={64}
                                    height={30}
                                    priority
                                /></a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Our Story</a></li>
                                <li>
                                    <details>
                                        <summary>Our Work</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>Reach Out</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn">Book a call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}