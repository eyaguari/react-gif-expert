import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './components/GifGrid'
export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);


    const onAddCategory = (category) => {
        if(categories.includes(category)) return alert('La categoría ya existe');

        setCategories( [category, ...categories] );
        console.log(categories);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        {/* Buscador */}
        <AddCategory  onNewCategory={ onAddCategory  }/>
        

        
        {categories.map( c => (
            <GifGrid 
                key={c}
                category={ c }
            />
        ) )}
        
    </>
  )
}
