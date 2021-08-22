var dob= document.querySelector('#dob');
var luckyNum= document.querySelector('#lucky-num');
var btnCheck= document.querySelector('#btn-check');
var outputValue=document.querySelector('#op');
console.log(dob.value)
btnCheck.addEventListener('click',checkBirthday)

function checkBirthday()
{
    const bdate=dob.value;
    const luckyNumber=luckyNum.value;
    const sum=checkNumber(bdate);
    checkValues(sum,luckyNumber)

}
function checkNumber(bdate)
{
    var sum=0;
    bdate=bdate.replaceAll('-',"");
   
    for(let i=0;i<bdate.length;i++)
    {
        sum=sum+Number(bdate.charAt(i));
    }
    return sum;
}
function checkValues(sum,luckyNumber)
{
    console.log(sum,luckyNumber)
    if(sum%luckyNumber===0)
    {

        outputValue.innerText='your birthday is lucky!💥💥';
       
    }
    else{
        outputValue.innerText='your birthday is not lucky 😣';
    }
}
