import { Card, CardContent, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

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
];

export default function Showcase() {
    return (
        <Carousel className="">
            <CarouselContent>
                {cards.map((card, index) => (
                    <CarouselItem key={index} className=" basis-1/3">
                        <div className="p-1">
                            <Image src={card.img} alt={card.title} width={300} height={300} className=" aspect-square object-cover hover:brightness-50 transition-all duration-300 cursor-pointer "/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>)

}