export interface Rectangle {
  length: number;
  width: number;
}

export const areaOfRectangle = ({ length, width }: Rectangle): number => {
  return length * width;
};
