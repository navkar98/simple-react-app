import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import styled from 'styled-components'

function Searched() {

    let param = useParams();

    const [searchedRecipes, setSearchedRecipes] = useState([]);

    useEffect(() => {
        getSearched(param.search);
    }, [param.search])

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.local.REACT_APP_API_KEY}&query=${name}`)
        const data = await api.json();
        console.log(data);
        setSearchedRecipes(data.results);
    }

  return (
    <Grid>
        {searchedRecipes.map((recipe)=>{
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

const Grid = styled.div`
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

export default Searched