import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_PATH } from '../../constants';
import { Miniaturas } from './items/Miniaturas';

export const Peliculas = () => {

    const [ listMovie, setListMovie] = useState([])

    const getListMovies = async() => {
        try {
            let result = await axios.get(`${BASE_PATH}/anime?sort=popularityRank&filter[subtype]=movie&page[limit]=20`)
            console.log(result)

            if(result.status === 200){
                setListMovie(result.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getListMovies()
    },[])

    return (
        <section id="content">
            <h2 className="subheader">Peliculas</h2>

            <div id="articles">
                {listMovie.map((item)=>{
                    return(
                        <Miniaturas dataAnime={item} ></Miniaturas>
                    )
                })

                }
            </div>

        </section>
    )
}