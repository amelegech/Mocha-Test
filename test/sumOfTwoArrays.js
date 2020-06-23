
const assert= require('assert')


   function sumOfTwoArraysNotSameSize(arrA, arrB){
    let mySum= [];
    for(let i= 0; i< Math.max(arrA.length, arrB.length) ; i++){
        mySum.push((arrA[i] || 0) + ( arrB[i]|| 0))
        }
        return mySum;
    }

let arr1=[1,2,3];
let arr2 =[4,5]; 
//let myResult = sumOfTwoArraysNotSameSize([1,2,3], [4,5])
//console.log(myResult);//[ 5, 7, 3 ]


describe('sum of Two arrays', function(){
    it("sum of two arrays that has different index size", function(){
        assert.deepEqual(sumOfTwoArraysNotSameSize(arr1,arr2),[5,7,3])

    })

})









//********** This is how to sum two arrays that has same size*********//
/*function sumOfTwoArrays(arrA, arrB){
    let sum= [];
    for(let i=0; i<arrA.length; i++){
            sum.push(arrA[i]+ arrB[i])
        }
        return sum;
    }

let arr1 =[1,2,3];
let arr2 =[4,5,6]; 
let result = sumOfTwoArrays(arr1,arr2)
console.log(result); //[5, 7, 9]*/