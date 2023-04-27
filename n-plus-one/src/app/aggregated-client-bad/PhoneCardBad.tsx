"use client"
import { IPhone } from '@/types';
import Image from 'next/image'

/*When converting a server component to a client component, the dev should be careful and noted that everything
that is going down to the client component would be persisted in the JS data that goes to the client  */

export const PhoneCard = ({iphones, identifier} : {iphones: IPhone[], identifier: string}) =>{

const iphone = iphones.find(iphone => iphone.Identifier === identifier)!;

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

