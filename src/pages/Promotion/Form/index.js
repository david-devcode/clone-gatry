import React from 'react';
import { useParams} from 'react-router-dom';


export default function PromotionForm () {
    const { id } =  useParams();
    return(
        <h1>
            Form 
            {id && (<div>id: {id}</div>)}
        </h1>
    )
}