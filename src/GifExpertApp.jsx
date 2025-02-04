// API KEY: KePpNON5mji30VrlhwWKY2FLBQJTBsw

import { useState } from "react";
import AddCategory from "./components/AddCategory"; 
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories ([...categories, newCategory]);
    
    }

  return (
    <>
        {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
          onNewCategory = {value => onAddCategory(value)}
      />
      
      {/* Listado de Gif */}
        {
          categories.map((category) => (
            <GifGrid 
              key = {category} 
              category = {category} /> 
          ))
        }
    </>
  )
}

export default GifExpertApp
