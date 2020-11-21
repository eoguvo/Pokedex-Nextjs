import React from 'react';

import Card from '../components/Card';

import { Ul, Title } from '../styles/index';

type pokemonApiTypes = {
    entry_number: int,
    pokemon_species : {
        name: string,
    }
}

const Home = ({pokemons}: pokemonApiTypes): react.ReactElement => {
    return (
        <>
        <Title>Pokedex</Title>
        <Ul>
            {pokemons.map((pokemon, index) => {
                const name = pokemon.pokemon_species.name;
                 return (
                    <Card
                        key = {index}
                        name = {name} 
                        id = {pokemon.entry_number}
                    />
                 )
            })
            }
        </Ul>
        </>
    )
}

export async function getStaticProps(): pokemonApiTypes {
        const url = "https://pokeapi.co/api/v2/pokedex/2/"
        const pokemons = await fetch(url)
        .then(response=>{
            if(response.ok)  {
                return response.json();
            }
        })
        .then(response=>{
            return response.pokemon_entries;
        })
        return {
            props: {
                pokemons,
            }
        };
    }

export default Home;