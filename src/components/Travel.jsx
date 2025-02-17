
import { useCallback, useState } from 'react'
import TravelCard from './TravelCard'
import { useEffect } from 'react';

import data from "../../public/data";

import './Travel.css'

const Travel = () => {
    return (
        <div className="travel-container">
            {
                data.map(item => (
                    <TravelCard key={item.id}  travel={item}/>
                ))

            }
        </div>
    )
}
export default Travel;