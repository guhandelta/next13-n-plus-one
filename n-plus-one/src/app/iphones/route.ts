// A new route handler

import { NextResponse } from "next/server";

const IPHONES_API = "http://localhost:8080"

/*The output of the completeData Promise should be the entire iPhones data, which will be fetched once 
when the app is loaded or the first time when the specific route is fetched */
const completeData = fetch(`${IPHONES_API}`)
.then(res => res.json())
                     .then(async (identifiers: string[]) =>{
                        const data = [];
                        for(const identifier of identifiers){
                          const iphoneReq = await fetch(`${IPHONES_API}/${identifier}`);
                          data.push(await iphoneReq.json());
                        }
                        return data;
                     });

export async function GET(request: Request) {
  /* await-ing the completeData won't go fetch it everytime, rather, once the promise is resolved, it will 
  return teh resolved data over and over again */
  return NextResponse.json(await completeData);
}