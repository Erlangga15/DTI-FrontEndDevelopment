export interface Name {
	name: string;
}

export const nameInitialInUppercase = ({ name }: Name): string => {
	return name
		.split(" ")
		.map((n) => n[0].toUpperCase())
		.join("");
};
