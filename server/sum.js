// function sum(a){
//     const computeValue = (b) => {
//         if(b!==undefined){
//             return a + b
//         }
//         return sum(a)
//     }
//     return computeValue
// }
function sum(a){
        return function computeValue  (b)  {
        if(b==undefined){
            return a
        }
        return sum(a+b)
    }
}
//const result0=sum(3)(3)(2)()
const result1=sum(3);
console.log(result1);
const result2=result1(2);
console.log(result2);
const result3=result2();
console.log(result3);








