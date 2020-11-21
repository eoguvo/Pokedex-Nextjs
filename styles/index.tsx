import styled from 'styled-components';

export const Ul = styled.ul`
  padding: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, auto);
  /* margin-left: 50%;
  transform: translateX(-65%); */
  margin-right: auto;
    @media(max-width: 1000px) {
      grid-template-columns: repeat(auto-fill, 160px);
    }
`;

export const Title = styled.h1`
  margin-top: 0;
  height: 64px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0, white 50%, red 50%);
  position: relative;
  align-items: center;
  z-index: 100;
  :before {
    content: '';
    position: absolute;
    background: black;
    width: 100%;
    height: 8px;
    z-index: -1;
  }
`;

export const PokemonList = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
`