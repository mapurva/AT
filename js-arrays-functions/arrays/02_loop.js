let marks = [50,60,70,80];

for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}

//Looping array elements (Using callback function)
// marks.forEach(function(value,index){

//     console.log(index,value);

// });
let sequence = [1, 1, 2, 3, 5, 8, 13];
sequence.forEach(disp);
function disp(a, b) {
console.log(b, a)
}