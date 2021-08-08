
import React from 'react';

const zeros = "000000000000000000000";

export function flToInt(floatVal1, precision) {
  let str = "" + floatVal1;
  str = zeroFill(str, precision).replace(".", "");
  return parseInt(str);
}

export function intToFl(intV, precision) {
  let str = zeros + intV;
  let decimalPart = str.substring(str.length - precision);
  let wholePart = str.substring(0, str.length - decimalPart.length);

  return parseFloat(wholePart + "." + decimalPart);
}

export function add(floatVal1, floatVal2) {
  let int1 = flToInt(floatVal1);
  let int2 = flToInt(floatVal2);
  return intToFl(int1 + int2, 2)
}

export function zeroFill(str, precision) {
  let arr = str.split(".");
  let decimalNum = (arr[1] || zeros) + zeros;

  return arr[0] + decimalNum.substring(0, precision);
}
