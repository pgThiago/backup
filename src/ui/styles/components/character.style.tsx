import tw from "tailwind-styled-components";

export const Container = tw.div`
	w-5/6
	h-full
	bg-gray-900
	mt-8
	p-2
	rounded-md
	flex
	flex-col
`;

export const CharacterPictureContainer = tw.div`
	flex
	items-center
	justify-center
	
`;

export const CharacterPicture = tw.img`
	rounded-full
	w-3/4
	h-full
	flex-center
	bg-gray-900
`;

export const CharacterDetailsContainer = tw.div`
	flex
	items-center
	justify-between
	w-full
	h-full
	mt-12
`;

export const NameGenderContainer = tw.div`
	flex
	items-start
	justify-center
	flex-col
	w-2/3
	ml-2	
`;

export const Name = tw.span`
text-white
	text-md	
`;
export const Gender = tw.span`
text-white
	text-md
`;

export const FavoriteButton = tw.button`
	bg-green-500
	text-white
	text-md
	w-2/5
	h-2/5
	mr-2
	hover:bg-green-900
`;
