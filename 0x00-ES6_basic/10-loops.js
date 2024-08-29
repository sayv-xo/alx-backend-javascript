/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
