// Check read me for instructions 
import { test, expect } from "vitest";

function arrayAdder() {
    
}

function arrayMultiplier() {

}

const firstArray = [2,5,6,17,250];
const secondArray = [10,150,1562];
const thirdArray = [420, 69,911,1066];
const fourthArray = [ 1,80,689,4750, 0]





//////////////////////////////////////////////////////////////////////////////////////
///////////////// TEST AREA, DO NOT TOUCH ANYTHING BELOW HERE ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////








test("The added total of the first Array", () => {
    expect(arrayAdder(firstArray)).toEqual(280);
})


test("The added total of the second array", () => {
    expect(arrayAdder(secondArray)).toEqual(1722);
})
test("The subtracted total of the third array", () => {
    expect(arrayMultiplier(thirdArray)).toEqual(28143231480);
})

test("The multiplied total of the forth array", () => {
    expect(arrayMultiplier(fourthArray)).toEqual(0);
})
