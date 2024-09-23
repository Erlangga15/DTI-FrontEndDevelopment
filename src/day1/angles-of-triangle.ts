export interface TriangleAngles {
  angle1: number;
  angle2: number;
}

export const anglesOfTriangle = ({ angle1, angle2 }: TriangleAngles): number => {
  return 180 - (angle1 + angle2);
};
