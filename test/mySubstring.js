let assert = require('assert')
function mySubstring(str, y){
    let subStr ='';
    for(let i= y; i<str.length; i++){
        subStr += str[i]
    }
    return subStr

} 
let mystr= 'I think mocha test is awesom'; 
let num = 7;
//let output =mySubstring(mystr,num)
//console.log(output)//mocha test is awesom

describe('working on string', function(){
    it("working on string  and number", function(){
        assert.equal(mySubstring(mystr,num), ' mocha test is awesom')

    })

})
