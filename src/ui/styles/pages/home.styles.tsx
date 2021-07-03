import tw from "tailwind-styled-components";

export const Container = tw.div`	
	flex
	items-center
	justify-center
	flex-col
	w-full
	h-auto
	bg-black
`;

export const Header = tw.header`flex
	items-center
	justify-center
	flex-col
	w-full
`;

export const Logo = tw.img`	
	mt-2
`;

export const SearchInput = tw.input`
	my-6
	w-3/6
	border-0
	border-b-2
	focus:outline-none 
	focus:ring 
	focus:border-blue-300
	bg-black
	text-white
	p-2
`;

export const Main = tw.main`	
	w-full
	rounded-lg
	grid
	grid-cols-3
	gap-y-8
	justify-items-center
`;
