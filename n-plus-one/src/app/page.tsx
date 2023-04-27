import { IPhone } from '@/types';
import Image from 'next/image'

const PhoneCard = async ({identifier} : {identifier: string}) =>{

/*This is the N requests made to fetch the data of each phone for each individual phone cards, where the +1 req
was the original req made to fetch all the identifiers of the available phones => N+1 problem*/  

const phoneReq = await fetch(`http://localhost:8080/${identifier}`);
const phone = (await phoneReq.json()) as IPhone;

// The PhoneCard component is an async as it had to go fetch the data it has to display on the card
  return(
    <div className="card w-96 bgn-base-100 shadow-xl">
      <figure>
        <Image 
          src={`http://localhost:8080/${phone.Image}.png`}
          alt={phone.Generation}
          width={116}
          height={235}
        />
      </figure>
      <div className="card-body text-white">
        <div className="card-title text-3xl">{phone.Generation}</div>
        <div className="flex flex-wrap gap-1">
          {Array.from(new Set(phone.Models.map(model => model.Color))).map(color => (
            <span
              key={[phone.Generation, color].join(":")}
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

const Phones = ({identifiers} : { identifiers: string[] }) => {
  return(
    <>
      {identifiers.map(identifier =>
        /*VS Code may show some squiggly line under PhoneCard, saying that this an async component and not a valid 
        JSX element, except that it can be used as this is NextJS 13 and React Server Component, so the squggily 
        warning lines may be ignored with the @ts-expect-error tag */ 
        /* @ts-expect-error Async Server component*/
        <PhoneCard key={identifier} identifier={identifier} />
      )}
    </>
  )
}

export default async function Home() {

  /*This makes 1 request to get all the iPhones, which is the +1, while the N requests are made while fetching 
  the data of each phone for each phone card => N+1  */

  // The Home app is an async as fetch() is used within
  // Fetch all the id's
  const identifiersReq = await fetch("http://localhost:8080/");
  // Get those identifiers/id's as an array of strings
  const identifiers = (await identifiersReq.json()) as string[];

  return (
    <main className="text-white grid md:grid-cols-3">
      <Phones identifiers={identifiers} />
    </main>
  )
}
