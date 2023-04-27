import { IPhone } from '@/types';

import { PhoneCard } from './PhoneCardBad'

export const Phones = ({iphones} : { iphones: IPhone[] }) => {
  return(
    <>
      {iphones.map(iphone =>
        /* The error tag is not used here as, the PhoneCard is gonna just display the data it has*/
        <PhoneCard 
          key={iphone.Identifier} 
          iphones={iphones} 
          identifier={iphone.Identifier} 
        />
      )}
    </>
  )
}
