"use client"
import { IPhone } from '@/types';
import Image from 'next/image'

const PhoneCard = ({iphone} : {iphone: IPhone}) =>{

  // The PhoneCard component is an async as it had to go fetch the data it has to display on the card
  return(
    <div className="card w-96 bgn-base-100 shadow-xl">
      <figure>
        <Image 
          src={`http://localhost:8080/${iphone.Image}.png`}
          alt={iphone.Generation}
          width={116}
          height={235}
        />
      </figure>
      <div className="card-body text-white">
        <div className="card-title text-3xl">{iphone.Generation}</div>
        <div className="flex flex-wrap gap-1">
          {Array.from(new Set(iphone.Models.map(model => model.Color))).map(color => (
            <span
              key={[iphone.Generation, color].join(":")}
              className="badge badge-primary badge-lg whitespace-nowrap rounded-md"
            >
              {color}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Phones = ({iphones} : { iphones: IPhone[] }) => {
  return(
    <>
      {iphones.map(iphone =>
        /* The error tag is not used here as, the PhoneCard is gonna just display the data it has*/
        <PhoneCard key={iphone.Identifier} iphone={iphone} />
      )}
    </>
  )
}
