import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    const onAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])


        // setCategories(cat => [...cat, 'River'])
        // console.log(newCategory);
        // categories.push(newCategory);
        // setCategories([...categories, 'River'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(e) => onAddCategory(e)}
            />

            { 
                categories.map( (category, i) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                ))
            }

        </>
    )
}