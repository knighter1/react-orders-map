import points from '../points.json';

export const getPointById = (pointId) => points.find(item => item.id === pointId);
