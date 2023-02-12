/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let totalBirds=0;
    for (let i = 0; i < birdsPerDay.length; i++) {
      totalBirds += birdsPerDay[i];
    }
    return totalBirds
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let totalBirds=0;
    let weekStart = week*7-7;
    let weekEnd = week*7-1;
    for (let i = weekStart; i <= weekEnd; i++) {
      totalBirds += birdsPerDay[i];
    }
    return totalBirds
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for(let i=0;i<birdsPerDay.length; i+=2){
        birdsPerDay[i]+=1;
    }
    return birdsPerDay
  }