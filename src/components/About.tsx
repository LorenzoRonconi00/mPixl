import { CheckCircledIcon, CircleIcon, LockClosedIcon, RocketIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { TbMoneybag } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { RiSpeedUpLine } from "react-icons/ri";

const cardsContent = [
    {
        icon: <CheckCircledIcon />,
        title: "Simple",
        content: "Forget complex interfaces. Our websites are designed to be simple, intuitive, and easy to use."
    },
    {
        icon: <RiSpeedUpLine />,
        title: "Fast Shipping",
        content: "We usually take 1 month or less to get your website up and running. Every one of our websites is built from the ground up."
    },
    {
        icon: <TbMoneybag />,
        title: "Cheap",
        content: "Our work is cheaper compared to the alternatives. We also offer a 100% money back guarantee."
    },
    {
        icon: <RocketIcon />,
        title: "Performant",
        content: "Unleash blazing-fast speeds and say goodbye to lagging workflows. Boost your productivity to the max."
    },
    
    {
        icon: <GoGraph />,
        title: "Stats",
        content: "Get real-time insights into your data. Track your performance, revenue, and more with our powerful analytics."
    },
    
]

export default function About() {
    return (
        <div className="grid gap-10 justify-center grid-cols-1 md:grid-cols-3 max-w-6xl mx-5">
            {cardsContent.map((card, index) => (
                <Card key={index} className="">
                    <CardHeader className="flex  gap-5">
                        <CardTitle className="flex gap-2">{card.icon} {card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="">{card.content}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}