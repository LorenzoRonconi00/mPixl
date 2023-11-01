import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./portfolio.scss";

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

const Portfolio = () => {
  return (
    <div className="pt-20 grid grid-cols-1 items-center justify-center">
      <div className=" justify-center align-middle mx-10">
        <h1 className="text-center py-10 text-6xl font-thin">
          I Nostri <b>Progetti</b>
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ type: "progressbar" }}
          className="max-w-5xl w-full rounded-xl overflow-hidden"
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-full">
                <a href={card.url} target="_blank" rel="noreferrer">
                  <div className="overflow-hidden h-[60vh]">
                    <div
                      style={{
                        backgroundImage: `url(${card.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                      }}
                      alt={card.title}
                      className="hover:scale-150 transition duration-500 ease-in-out"
                    ></div>
                  </div>
                  <h1 className="text-3xl text-center text-white w-auto bg-neutral-600/50 py-5 px-10">
                    {card.title}
                  </h1>
                  <p className="text-center text-white w-auto bg-neutral-600/50 pb-5 px-10">
                    {card.desc}
                  </p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
