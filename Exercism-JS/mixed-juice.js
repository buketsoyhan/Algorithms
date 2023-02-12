/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case "Pure Strawberry Joy":
      time += 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      time += 1.5;
      break;
    case "Tropical Island":
      time += 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      time += 2.5;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
const LIME_SIZES_TO_WEDGES = {
  small: 6,
  medium: 8,
  large: 10,
};
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;

  while (wedgesNeeded > 0 && limes.length > 0) {
    limesCut++;
    wedgesNeeded -= LIME_SIZES_TO_WEDGES[limes.shift()];
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
