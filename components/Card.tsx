import useSwr from 'swr';

import { ReactElement } from 'react';

import { Li, Image, PokemonName, CardSkeleton } from '../styles/Card'
import { CardProps, Data } from '../interfaces/Card';

const Fetcher = (url: string): unknown => fetch(url).then(res=>res.json());

const Card = ({name, id}: CardProps, ...resto: number[]|string[]): ReactElement => {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const { data, error, isValidating }: Data = useSwr(`https://pokeapi.co/api/v2/pokemon/${name}`, Fetcher);
    if(isValidating) {
        return <CardSkeleton />
    } else if (!error) {
        return (
            <>
                <Li {...resto} type={
                    data ? data.types[0].type.name : undefined
                }>
                    <Image src={spriteUrl} />    
                    <PokemonName>
                        {name}
                    </PokemonName>
                </Li>
            </>
        )
    }
}

export default Card;