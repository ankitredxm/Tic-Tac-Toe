let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector(".reset1");
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgConatiner.classList.add("hide");


}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}




const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showWinner=(winner)=>{
    disabledBoxes();
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
}

const checkwinner=()=>{
    for(pattern of winpatterns){
        
 

 let pos1val=boxes[pattern[0]].innerText;
 let pos2val=boxes[pattern[1]].innerText;
 let pos3val=boxes[pattern[2]].innerText;
 if(pos1val!=""&&pos2val!=""&&pos3val!=""){
    if(pos1val==pos2val&&pos2val==pos3val){
        console.log("winner");
        showWinner(pos1val);
    }
 }
    } 


 }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
    
});

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
