let num=50;
let isPrime;
for(let i=2;i<=num;i++){
    for( let j=2;j<i;j++){
        isPrime="yes";
        if(i%j==0){
            isPrime="No";
            break;
        }

    }if(isPrime=="yes"){
        document.write("<br>"+i);
    }
    
}