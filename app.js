let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-button");

let turnO= true; // playerX , playerO
//let arr=[" apple , banana , litchi"]; // one d arry
// 2d Arrays
//let arr2=[["apple" ,"litchi"], ["patato" ,"mushroom", ],["pants", "shirt"]];
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,6],
  [2,4,6],
  [3,4,5],
  [6,7,8]

]
boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
     console.log("box was clicked ")
     box.innerText="Abcd";
     if(turnO){// playero
      box.innerText="o";
      turnO=false;
      
     }
     else{//player x
      box.innerText="x";
      turnO=true;
     }
     box.disabled=true; // no change button double click any one

     checkWinner();
  })
})
//check winner
     const checkWinner=()=>{
      for  (let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText
          ,boxes[pattern[1]].innerText,
          boxes[pattern[2]] .innerText// inner text saved we cant't change any value

          );
          let pas1Val=boxes[pattern[0]].innerText;
          let pas2Val=boxes[pattern[1]].innerText;
          let pas3Val=boxes[pattern[2]].innerText;
          //check value 
          if(pas1Val !="" && pas2Val!="" && pas3Val!="")
          if(pas1Val==pas2Val && pas2Val==pas3Val ){ // checking winner hai ki ni h to match hoga pattern 
            console.log("Winner");
          }

      }
     }