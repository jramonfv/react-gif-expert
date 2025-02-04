import GifItem from "../components/GifItem";
import {useFechGifs} from "./hooks/useFechGifs";


const GifGrid = ({ category }) => {

    const {images, isLoading} = useFechGifs (category);

    return (
        <>
            <h3> {category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            } 
            <div className="card-grid">
                {
                    images.map( (image ) => (
                        <GifItem                 
                            key ={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
