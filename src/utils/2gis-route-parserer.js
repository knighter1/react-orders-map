const parseLinestring = (dump) => dump.slice(11, -1).split(', ').map(item => item.split(' ').reverse());

export const parseRoute = (maneuvers) =>
    maneuvers.map(maneuver => maneuver.outcoming_path?.geometry.map(geometry => parseLinestring(geometry.selection))).flat(2).slice(0, -1);
