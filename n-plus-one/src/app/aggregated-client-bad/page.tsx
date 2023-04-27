import Image from 'next/image'
import { Phones } from './PhonesClient';

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
