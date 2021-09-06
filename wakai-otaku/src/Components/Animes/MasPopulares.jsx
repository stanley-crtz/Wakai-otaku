import React, { useEffect, useState } from 'react';
import { Miniaturas } from './items/Miniaturas';
import axios from 'axios'
import { BASE_PATH } from '../../constants';

export const MasPopulares = () => {

    const [ listAnime, setListAnime ] = useState([])

    const getAnimePopular = async() => {
        try {
            let result = await axios.get(`${BASE_PATH}/anime?sort=popularityRank&page[limit]=20`)
            
            console.log(result)
            if(result.status === 200){
                setListAnime(result.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAnimePopular()
    }, [])

    return (
        <section id="content">
            <h2 className="subheader">Animes mas populares</h2>

            <div id="articles">
                {listAnime.map((item)=>{

                    return(
                        <Miniaturas dataAnime={item} ></Miniaturas>
                    )
                })

                }
                
            </div>

        </section>
    )
}