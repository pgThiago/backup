import { useState } from "react";
import {
  Container,
  Header,
  WatchFavoritesButton,
  Logo,
  SearchInput,
  LoadingMessage,
} from "ui/styles/pages/home.styles";

import imgLogo from "assets/images/logo.png";

import { CharacterItem } from "ui/components/CharacterItem";
import { InfiniteScroll } from "ui/components/InfiniteScroll";

import { CharacterType } from "types/CharacterType";

import { useCharacterSearch } from "data/hooks/useCharacterSearch";
import { useCharacterContext } from "data/hooks/useCharacterContext";

// import { api } from "data/services/api";

export function Home() {
  const { favorites } = useCharacterContext();

  const [searchedCharacter, setSearchedCharacter] = useState(""),
    [pageNumber, setPageNumber] = useState(1),
    [watchFavorites, setWatchFavorites] = useState(false);

  const { isLoading, hasMore, characters } = useCharacterSearch(
    pageNumber,
    searchedCharacter
  );

  function handleSearchCharacter(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchedCharacter(event.target.value);
  }

  function handleWatchFavorites() {
    setWatchFavorites(!watchFavorites);
  }

  return (
    <Container>
      <Header>
        <Logo src={imgLogo} alt="Rick and Morty" />
        <SearchInput
          value={searchedCharacter}
          onChange={handleSearchCharacter}
          type="search"
          placeholder="Procurar personagem"
        />
        <WatchFavoritesButton type="button" onClick={handleWatchFavorites}>
          {watchFavorites ? "Ver todos" : "Meus favoritos"}
        </WatchFavoritesButton>
      </Header>
      <InfiniteScroll
        onBottomHit={() => setPageNumber((prevNumber) => prevNumber + 1)}
        isLoading={isLoading}
        hasMoreData={hasMore}
      >
        {watchFavorites
          ? favorites.map((favorite: CharacterType) => (
              <CharacterItem
                key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
                gender={favorite.gender}
                isFavorited={true}
              />
            ))
          : characters.map((character: CharacterType) => (
              <CharacterItem
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                gender={character.gender}
                isFavorited={false}
              />
            ))}
        {watchFavorites === true && favorites.length === 0 && (
          <LoadingMessage>Nenhum selecionado como favorito</LoadingMessage>
        )}
        {isLoading && <LoadingMessage>Só um segundo...</LoadingMessage>}
      </InfiniteScroll>
    </Container>
  );
}
