"use client"

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const cards = [
    {
        id: 1,
        title: "SNL Shipping",
        img: "/snlshipping.png",
        desc: "Sito web per azienda di trasporti",
        url: "http://snlshipping.com/",
    },
    {
        id: 2,
        title: "Hotel Marittima",
        img: "/marittima.png",
        desc: "Sito web per hotel",
        url: "https://marittima.vercel.app/",
    },
    {
        id: 3,
        title: "MecSpare",
        img: "/mecspare.png",
        desc: "Sito web per rivendita di ricambi online",
        url: "https://mecspare2.vercel.app/",
    },
    {
        id: 3,
        title: "MecSpare",
        img: "/mecspare.png",
        desc: "Sito web per rivendita di ricambi online",
        url: "https://mecspare2.vercel.app/",
    },
    {
        id: 3,
        title: "MecSpare",
        img: "/mecspare.png",
        desc: "Sito web per rivendita di ricambi online",
        url: "https://mecspare2.vercel.app/",
    },
];

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5




export default function Slider() {
    return (
        <EmblaCarousel slides={cards} options={OPTIONS} />
    );
}