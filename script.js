let box=document.querySelectorAll(".box");
let reset=document.querySelector(".res");
let curr="X";
let msg=document.querySelector(".msg");
msg.style.display="none";
const win=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
box.forEach((b )=>{
    b.addEventListener("click",()=>{
        console.log("Clickedddd!!!");
        b.innerText=curr;
        if(curr=="X")curr="O";
        else curr="X";
        b.disabled=true;
        iswin();
    });
});

const iswin = () =>{
    let a,b,c;
    let winner=false;
    for(let i of win){
        a=box[i[0]].innerText;
        b=box[i[1]].innerText;
        c=box[i[2]].innerText;
        if(a!="" && a===b && b===c){
            disableAll();
            winner=true;
            console.log("WINNNNEEERRRR",a);
            msg.style.display = "block";
            msg.innerText="WINNER "+a+" !!!";
        }
    }
    if(!winner){
        let draw = true;
        box.forEach(b => {
            if(b.innerText === "") draw = false;
        });
        if(draw){
            console.log("DRAW!!!");
            msg.style.display = "block";
            msg.innerText = "It's a DRAW!";
        }
    }
};
const disableAll = () => {
  box.forEach(b => b.disabled = true);
};
reset.addEventListener("click", () => {
    console.log("New game");
  box.forEach(b => {
    b.innerText = "";
    b.disabled = false;
  });
  curr = "X";
  msg.style.display="none";
  msg.innerText = "";
});

