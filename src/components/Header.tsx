"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navbarItems = [
    {
        name: "Our Story",
        href: "#about",
    },
    {
        name: "Our Work",
        href: "#projects",
    },
    {
        name: "Reach Out",
        href: "#contact",
    },
];

export default function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const updateScrollPosition = () => {
            const scrolled = window.scrollY;
            setScrollPosition(scrolled);
        };

        window.addEventListener('scroll', updateScrollPosition);

        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    useEffect(() => {
        const handleOpacity = () => {
            // Adjust these values to control the transition range and opacity levels
            const threshold = 200; // Amount of scroll needed for full opacity change
            const baseOpacity = 0; // Starting opacity for bg-zinc-950
            const maxOpacity = 0.95; // Maximum opacity for bg-zinc-950
            const opacity = Math.min(maxOpacity, baseOpacity + (scrollPosition / threshold) * (maxOpacity - baseOpacity));
            return opacity;
        };

        setOpacity(handleOpacity());
    }, [scrollPosition]);

    return (
        <div className="fixed w-full z-50">
            <div className="">
                <div className={`flex justify-center rounded-lg `} style={{
                    borderBottom: `1px solid rgba(255, 255, 255, ${opacity / 10})`,
                    backdropFilter: `blur(${opacity * 8}px)`,
                }}>
                    <div className="flex justify-between w-full p-5">
                        <div className="flex items-center">
                            <Image
                                className="-ml-1 -mb-1"
                                src="/logowhite.svg"
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex items-center gap-6">

                            {navbarItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-slate-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}