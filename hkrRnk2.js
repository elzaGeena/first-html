const arr=[
    [1,1,1,1,1,1],
    [2,2,2,2,2,2],
    [3,3,3,3,3,3],
    [4,4,4,4,4,4],
    [5,5,5,5,5,5],
    [6,6,6,6,6,6]
];
console.log(arr);
function hourglassSum(arr) {
let n=0;
let i,l,m,sum=0;
let sumArr=[];

while(n<4){
    for(i=0;i<4;i++)
    {
   for(l=0;l<3;l++)
    for(m=0;m<3;m++){
        if((l===1)&& (m!==2)){
            sum=sum;
        }
      // console.log(arr[i+l][n+m]);
      else{
       sum+=arr[i+l][n+m];
      }
    }
sumArr=[...sumArr,sum];
//console.log(sumArr);
sum=0;
}
    n++;

}
sumArr=sumArr.sort();
const largest=sumArr.pop();
return largest;

}
console.log (hourglassSum(arr));
//2
let arr=[6,4,5,3,4,7,8,11,2,10,7,17,0,8,2,14];
let spArr=arr.splice(0,2);
arr=[...arr,...spArr]
//let sortArr=arr.sort(function(a, b){return a - b});;
console.log(arr);