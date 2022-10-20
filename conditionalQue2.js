function question1(){
    let num=document.getElementById('ans1').value;
    if(num =="ECMAScript" || num=="ecmascript"){
        document.write( 'Correct Answer');
    }
    else{
        document.write( 'Wrong Answer');
        document.write( 'Correct Answer is i) ECMAScript');
    }
}
function second(){
    let a=document.getElementById('optionA').value;
    let b=document.getElementById('optionB').value;
    let c=document.getElementById('optionC').value;
    if(a>b && a>c){
        document.write('The Greatest Number is A :: ' +a )
    }
    else if(b>c && b>a){
        document.write('The Greatest Number is B :: ' +b )
    }
    else{
        document.write('The Greatest Number is C :: ' +c )
    }
}