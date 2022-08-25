import points from '../points.json';
import { TPoint } from '../Types/point';

export const getPointById = (pointId: number): TPoint | undefined => points.find(item => item.id === pointId);
