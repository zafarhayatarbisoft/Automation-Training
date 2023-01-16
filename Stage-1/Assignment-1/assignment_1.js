let arry = [3,8,5,99,6,24,98,66];
let max = 0;
for (let i= 0; i < arry.length; i++){  
    if(arry[i] > max){
     max = arry[i]; 
    }
}
console.log('largest number is : '+ max);
console.log('index of largest no is : ' + arry.indexOf(max));