import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_PATH } from '../../constants';
import { Miniaturas } from './items/Miniaturas';

export const Emision = () => {

    const [listAnime, setlistAnime] = useState([])

    const getListAnimeRelease = async () => {
        try {
            let result = await axios.get(`${BASE_PATH}/anime?sort=-averageRating&filter[status]=current&page[limit]=20`)
            console.log(result)

            if (result.status === 200) {
                setlistAnime(result.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getListAnimeRelease()
    }, [])

    return (
        <section id="content">
            <h2 className="subheader">En emision</h2>

            <div id="articles">

                {listAnime.map((item) => {
                    return (
                        <Miniaturas dataAnime={item} ></Miniaturas>
                    )
                })

                }
            </div>

        </section>
    )
}