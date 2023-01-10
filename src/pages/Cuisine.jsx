import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Cuisine() {
    let param = useParams();

    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        getCuisine(param.type);
    }, [param.type])

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const data = await api.json();
        console.log(data);
        setCuisine(data.results);
    }

  return (
    <Grid 
        animate={{opacity:1}}
        initial={{opacity:0}}
        end={{opacity:0}}
        transition={{duration:0.5}}
    >
        {cuisine.map((recipe)=>{
            return(
                <Card key={recipe.id}>
                    <Link to={'/recipe/'+recipe.id}>
                        <img src={recipe.image} alt={recipe.title}></img>
                        <h4>{recipe.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    
    a {
        text-decoration: none;
    }
    
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine