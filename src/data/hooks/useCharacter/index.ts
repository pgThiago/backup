import { api } from "data/services/api";
import { useEffect, useState } from "react";
import { CharacterType } from "types/CharacterType";

export function useCharacterSearch(query: string, pageNumber: number) {
  const [characters, setCharacters] = useState<CharacterType[]>([]),
    [isLoading, setIsloading] = useState(true),
    [hasError, setHasError] = useState(false),
    [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    api({
			
		})
  }, []);

	return {
		characters
	}
}
