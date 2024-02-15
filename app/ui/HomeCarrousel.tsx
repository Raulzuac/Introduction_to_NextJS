'use client'
import useEmblaCarousel from 'embla-carousel-react'

const HomeCarousel = () => {

  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' })

  return <div>Carrousel</div>
  // return (
  //   <div className="embla">
  //     <div className="embla__viewport" ref={emblaRef}>
  //       <div className="embla__container">
  //         {pokemon.map((index) => (
  //           <div className="embla__slide" key={index}>
  //             <div className="embla__slide__number">
  //               <span>{index + 1}</span>
  //             </div>
  //             <img
  //               className="embla__slide__img"
  //               src={imageByIndex(index)}
  //               alt="Your alt text"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default HomeCarousel