import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const { data:images,loading } = useFetchGifs(category);
    // useEffect(()=>{
    //    getGifs(category).then(setImages);
    // }, [category]);

   /* const getGifs = async() => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Rja70t30tA9cK1aWlrCcNm0NRqjrpEh2`;
        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            }            
        )

        console.log(gifs);
        setImages(gifs);
    }*/

    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                <ol>
                    {                  
                        images.map( img => (
                            <GifGridItem 
                            key={img.id}
                            {...img} 
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
