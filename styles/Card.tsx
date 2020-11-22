import styled from 'styled-components';
import { colors } from '../utils/colors';

export const CardSkeleton = styled.li`
  height: 240px;
  width: 160px;
  list-style: none;
  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const Li = styled.li<{type: string;}>`
    width: 160px;
    height: 240px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transition: all .2s;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    background-color: ${(props)=>colors[props.type || "normal"]}; 
    &:hover {
        z-index: 100;
        transform: translateY(-15px);
        box-shadow: 0 0 48px 0 ${(props)=>colors[props.type || "normal"]};
        cursor: pointer;
    }
`

export const Image = styled.img`
    padding-top: 34px;
    height: 96px;
    width: 96px;
`

export const PokemonName = styled.p`
    line-height: 48px;
    height: 60px;
    background-color: white;
    width: 100%;
    margin: 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;