let boxes=document.querySelectorAll(".box");
let rsetBtn=document.querySelector("#rsetbtn");
let newbtn=document.querySelector("#newbtn")
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");


let turnO=true;//playerX,playerO;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;

       checkwinner();
     
      
    });
});
const disabledbtn=()=>{
  for(let box of boxes){
  box.disabled=true;
  }
}
const enablebox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText= "";
  }
}

const showWinner=(Winner)=>{
  disabledbtn();
  msgContainer.classList.remove("hide");
}
const resegame=()=>{
  turnO=true;
  enablebox();
  msgContainer.classList.add("hide");
}
const checkwinner=()=>{
  for(let patern of winPatterns){

let poval1=boxes [patern[0]].innerText;
let posval2=boxes [patern[1]].innerText;
let posval3=boxes [patern[2]].innerText;

if(poval1!=""&& posval2!="" && posval3 !=""){

if(poval1 === posval2 && posval2 === posval3){

    console.log("Winner !..",poval1);
    showWinner(poval1);
   
    
}

}
  }
};

newbtn.addEventListener("click",resegame);
rsetBtn.addEventListener("click",resegame);
