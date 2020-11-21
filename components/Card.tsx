import styled from 'styled-components';
import useSwr from 'swr';

import { ReactElement } from 'react';

 import { colors } from '../utils/colors';

export type CardProps = {
    name: string,
    id: number,
}

const Li = styled.li<{type: string;}>`
    width: 160px;
    height: 240px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transition: all .2s;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    background-color: ${(props)=>colors[props.type || "fairy"]}; 
    &:hover {
        z-index: 100;
        transform: translateY(-15px);
        box-shadow: 0 0 48px 0 ${(props)=>colors[props.type || "fairy"]};
        cursor: pointer;
    }
`

const Image = styled.img`
    padding-top: 34px;
    height: 96px;
    width: 96px;
`

const PokemonName = styled.p`
    line-height: 48px;
    height: 60px;
    background-color: white;
    width: 100%;
    margin: 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

const Fetcher = (url: string): unknown => fetch(url).then(res=>res.json());

type Data = {
    data?: {
        types?: [{
            type: {
                name: string,
            }
        }]
    },
    error?: boolean,
    isValidating?: boolean
}

const Card = ({name, id}: CardProps, ...resto: number[]|string[]): ReactElement => {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const { data, error, isValidating }: Data = useSwr(`https://pokeapi.co/api/v2/pokemon/${name}`, Fetcher);
    if(data && data.types[0].type.name == "fairy") {
        console.log(data)
    }
    return (
        <>
            {isValidating ? <p>Loading resources...</p> : ''}
            {error ? <p>Ops! Something went wrong</p> : ''}
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

export default Card;