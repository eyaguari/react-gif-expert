import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'



export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((imagen) => (
                    <GifGridItem
                        key={imagen.id}
                        {...imagen}
                    />
                ))}
            </div>





        </>
    )
}
