export interface Circle {
  radius: number;
}

export const circumferenceOfCircle = ({ radius }: Circle): number => {
  return 2 * Math.PI * radius;
};

export const areaOfCircle = ({ radius }: Circle): number => {
  return Math.PI * radius * radius;
};
