import styled from 'styled-components';

import { colors } from '../utils/colors';

export type CardProps = {
    name: string,
    id: number,
    type: string[],
}

const Li = styled.li`
    width: 160px;
    height: 240px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transition: all .2s;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    background-color: ${props=>colors[props.type != undefined ? props.type : "flying"]};
    &:hover {
        z-index: 100;
        transform: translateY(-15px);
        box-shadow: 5px 5px 10px 0 black;
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
    // background-color:#e5ffff;

const Card = ({name, id, type}: CardProps, ...resto: int|string[]): jsx => {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <Li type={type} {...resto}>
            <Image src={spriteUrl} />    
            <PokemonName>
                {name}
            </PokemonName>
        </Li>
    )
}

export default Card;