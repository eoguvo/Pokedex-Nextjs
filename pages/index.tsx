import React from 'react';

import Card from '../components/Card';

import { Ul, Title, PokemonList } from '../styles/index';

type pokemonApiTypes = {
    pokemons: [{
        entry_number: number,
        pokemon_species : {
            name: string,
        }
    }]
}

const Home = ({pokemons}: pokemonApiTypes): React.ReactElement => {
    return (
        <>
        <Title><img style={{height: 64}} src="https://fontmeme.com/permalink/201121/9204f639d25150cb0f852676dcb5d643.png" /></Title>
        <PokemonList>
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
        </PokemonList>
        </>
    )
}

export async function getStaticProps(): Promise<unknown> {
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