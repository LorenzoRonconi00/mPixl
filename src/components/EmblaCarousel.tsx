import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: { id: number; title: string; img: string; desc: string; url: string; }[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla w-screen select-none">
      <div className="embla__viewport w-screen" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <a href={slide.url} className=' w-full aspect-square transition-all duration-300 hover:cursor-pointer hover:brightness-50'>
                <img src={slide.img} className='w-full object-cover aspect-square rounded-lg border-zinc-800 border'>
                </img>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel