import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import grotSpidey from "../assets/grotspidy.jpg"
import blueySpidey from "../assets/blueyspidey.jpg"
import twoSpidey from "../assets/twospidy.jpg"



export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">{grotSpidey}</div>
          <div className="embla__slide">{blueySpidey}</div>
          <div className="embla__slide">{twoSpidey}</div>
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button>
    </div>
  )
}