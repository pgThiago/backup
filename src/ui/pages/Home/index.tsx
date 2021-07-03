import { useEffect, useState } from "react";
import {
  Container,
  Header,
  Logo,
  SearchInput,
  Main,
} from "ui/styles/pages/home.styles";

import imgLogo from "assets/images/logo.png";

import { CharacterItem } from "ui/components/CharacterItem";

import { CharacterType } from "types/CharacterType";

import { useCharacter } from "data/hooks/useCharacter";

import { api } from "data/services/api";

export function Home() {
  const { characters } = useCharacter()
  return (
    <Container>
      <Header>
        <Logo src={imgLogo} alt="logo" />
        <SearchInput type="search" placeholder="Procurar personagem" />
      </Header>
      <Main>				
        {characters.map((character: CharacterType) => (
          <CharacterItem
            name={character.name}
            image={character.image}
            gender={character.gender}
          />
        ))}
      </Main>
    </Container>
  );
}
