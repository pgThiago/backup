// import { api } from "data/services/api";
import { useEffect, useState } from "react";
import { CharacterType } from "types/CharacterType";

import axios, { Canceler } from "axios";

export function useCharacterSearch(
  pageNumber: number,
  searchedCharacter: string
) {
  const [characters, setCharacters] = useState<CharacterType[]>([]),
    [isLoading, setIsLoading] = useState(false),
    [hasError, setHasError] = useState(false),
    [hasMore, setHasMore] = useState(false);
  console.log("characters: ", characters);

  useEffect(() => {
    setIsLoading(true);
    setHasError(true);
    let cancel: Canceler;
    axios({
      method: "get",
      url: `https://rickandmortyapi.com/api/character/`,
      params: {
        page: pageNumber,
        name: searchedCharacter.toLowerCase().replace(/\s/g, ""),
      },
      cancelToken: new axios.CancelToken((c: Canceler) => (cancel = c)),
    })
      .then((response) => {
        setCharacters((prevState) => {
          return [...new Set([...prevState, ...response.data.results])];
        });
        setHasError(false);
        setHasMore(response.data.info.next !== null);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(false);
        if (axios.isCancel(error)) return;
      });

    return () => cancel();
  }, [searchedCharacter, pageNumber]);

  return {
    isLoading,
    characters,
    hasError,
    hasMore,
  };
}
