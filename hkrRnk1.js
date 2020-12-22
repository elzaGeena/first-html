//qton 3
const s="abc"
const n=10;
function repeatedString(s, n) {
    const lengthOfString=s.length;
    const noOfCompleteRepetionOfS=Math.floor(n/lengthOfString);
    console.log(noOfCompleteRepetionOfS);
    const noOfLettersInInCompleteS=n%lengthOfString;
    //no.of repetion of a letter in one string
    let count=0;
    if(noOfCompleteRepetionOfS>0){
    for(let i=0;i<lengthOfString;i++){
        if(s[i]==='a'){
            count++;
        }
    }
        count*=noOfCompleteRepetionOfS;
}
    //no. of 'a's in the incomplete string
    if(noOfLettersInInCompleteS>0){
        for(let i=0;i<noOfLettersInInCompleteS;i++){
            if(s[i]==='a'){
                count++;
            }
            
        }
    }
    return count;

}
console.log(repeatedString (s,n));

//questn 2
var steps=12;
const path=['D','D','U','U','U','U','D','D'];
function countingValleys(steps, path) {
    var ptr=0
    var v=0;
    for(var i=0;i<steps;i++){
        if(ptr===0 && path[i]==='D'){
            v+=1;
            ptr-=1;
        }
        else{
            if(path[i]==='U')
             ptr+=1;   
            else ptr-=1;
            }
            
        }
        return v;
    }
    console.log(countingValleys(steps,path))
    //question 1
let n=9;
const ar=[10 ,20, 20 ,10 ,10 ,30 ,50 ,10 ,20];
function sockMerchant(n, ar) {
    let counter=0;
    ar.sort();
    console.log(ar)
    
    while(n>0)
    {
        
        if(ar[0]===ar[1]){
            ar.shift();
            ar.shift();
            counter=counter+1;
        }
        else{
        ar.shift();
        }
        n=ar.length;
    }
    return counter;
}


console.log(sockMerchant(n,ar));

