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

const Phones = ({iphones} : { iphones: IPhone[] }) => {
  return(
    <>
      {iphones.map(iphone =>
        /* The error tag is not used here as, the PhoneCard is gonna just display the data it has*/
        <PhoneCard key={iphone.Identifier} iphone={iphone} />
      )}
    </>
  )
}

export default async function Home() {

  /*This makes 1 request to get all the iPhones, which is the +1, while the N requests are made while fetching 
  the data of each phone for each phone card => N+1  */

  // The Home app is an async as fetch() is used within
  // Fetch all the id's 
  // NextJS aggresively caches every requests, so not to repeat it again, {cache: "no-cache"} turns it off
  const iphonesReq = await fetch("http://localhost:3000/iphones");
  // Get those iphones/id's as an array of strings
  const iphones = (await iphonesReq.json()) as string[];

  return (
    <main className="text-white grid md:grid-cols-3">
      <Phones iphones={iphones} />
    </main>
  )
}
