import React, { useState, useEffect } from 'react';
import { Miniaturas } from './items/Miniaturas';
import axios from 'axios';
import { BASE_PATH } from '../../constants';

export const Animes = () => {

    const [ listAnimes, setListAnimes ] = useState([])

    const getListAnimes = async() => {
        try {
            let result = await axios.get(`${BASE_PATH}/anime?sort=popularityRank&filter[subtype]=TV&page[limit]=20`)
            console.log(result)

            if(result.status=== 200){
                setListAnimes(result.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    } 
 
    useEffect(()=>{
        getListAnimes()
    },[])

    return (
        <section id="content">
            <h2 className="subheader">Animes</h2>

            <div id="articles">
                {listAnimes.map((item)=>{
                    return (
                        <Miniaturas dataAnime={item} ></Miniaturas>
                    )
                })

                }
            </div>

        </section>
    )
}