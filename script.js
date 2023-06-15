const target= Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1);
var gene=Array(30);
const test=[
    {
        question:"Q1. Are your periods irregular? ",
        a:"extreme",
        b:"moderate",
        c:"never"
    },
    {
        question:"Q2. Are your facing hairloss? ",
        a:"extreme",
        b:"moderate",
        c:"never"
    },
    {
        question:"Q3. HAVE YOU NOTICED A FLUCTUATION IN YOUR WEIGHT? ",
        a:"extreme",
        b:"moderate",
        c:"never" 
    },
    {
        question:"Q4. DO YOU NOTICE SUDDEN INCREASE IN YOUR FACIAL HAIR? ",
        a:"extreme",
        b:"moderate",
        c:"never" 
    }, 
    {
        question:"Q5. DO YOU SUDDENLY EXPERIENCE ACNE ON YOUR FACE? ",
        a:"extreme",
        b:"moderate",
        c:"never" 
    },
    {
        question:"Q6. ARE YOU TRYING TO CONCIEVE AND ARE UNABLE TO? ",
        a:"yes",
        b:"not sure",
        c:"no",
    },  
    {
        question:"Q7. ARE YOU TAKING ANY PILLS AND CHECK IF THE PILLS HAS SIDE EFFECT OF AFFECTING YOUR CYCLE ",
        a:"yes",
        b:"yes but has no side-effects",
        c:"no"
        
    }, 
    {
        question:"Q8. IS YOUR  SLEEP CYCLE UNHEALTHY? ",
        a:"extreme",
        b:"moderate",
        c:"never" 
    }, 
    {
        question:"Q9. IS YOUR EATING HABITS UNHEALTHY? ",
        a:"extreme",
        b:"moderate",
        c:"never" 
    }, 
    {
        question:"Q10. ARE YOU IN YOUR MENOPAUSE PHASE?  ",
        a:"yes",
        b:"cannot say",
        c:"no"
        
    },
]
const question=document.querySelector('.questions');
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const submit=document.querySelector("#submit")
const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore');
let questionCount=0;

const loadQuestion=()=>{
    
    const details=test[questionCount];
    question.innerHTML=details.question;
    option1.innerText=details.a;
    option2.innerText=details.b;
    option3.innerText=details.c;

}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    })
    return answer;

}

let i=0;
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    
    if (checkedAnswer=="ans1"){
        gene[i]=1;
        gene[i+1]=1;
        gene[i+2]=1;
        i=i+3;
    }
    else if(checkedAnswer=="ans2"){
        gene[i]=0;
        gene[i+1]=1;
        gene[i+2]=1;
        i=i+3;
    }
    else{
        gene[i]=0;
        gene[i+1]=0;
        gene[i+2]=1;
        i=i+3; 
    }
    console.log(gene);
    questionCount++;
    if(questionCount<10){
        
        loadQuestion();
    }
    else{
        const res=calculate_risk();
        console.log(res);
     document.getElementById("showScore").innerHTML="<h3>You have "+res+"% risk!!";
        
            
        

    }
})
const calculate_risk=()=>{
    var steps=20;
            var  len
            var j;
            for( j=0;j<30;j++){
                if(target[j]!=gene[j]){
                    steps--;
                    //document.writeln("different at: "+j+"<br>");
                    //gene[i]=target[i];
                }  
               }
               len=steps/20*100;
               
        
        return len;
        

            

}


