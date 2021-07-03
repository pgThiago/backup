import {
  Container,
  CharacterPicture,
  CharacterPictureContainer,
  CharacterDetailsContainer,
  NameGenderContainer,
  FavoriteButton,
  Name,
  Gender,
} from "ui/styles/components/character.style";

interface CharacterItemProps {
  name: string;
  image: string;
  gender: string;
}

export function CharacterItem({ name, image, gender }: CharacterItemProps) {
  function handleFavorite() {}
  return (
    <Container>
      <CharacterPictureContainer>
        <CharacterPicture src={image} alt={name} />
      </CharacterPictureContainer>

      <CharacterDetailsContainer>
        <NameGenderContainer>
          <Name>Nome: {name}</Name>
          <Gender>Gênero: {gender}</Gender>
        </NameGenderContainer>

        <FavoriteButton type="button" onClick={handleFavorite}>
          Favoritar
        </FavoriteButton>
      </CharacterDetailsContainer>
    </Container>
  );
}
