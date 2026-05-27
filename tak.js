box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector('#New-game');
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg");

let isx=true;
let count=0;

const resetgame=()=>{
    isx=true;
    count=0;
    enablebuttons();
    msgcontainer.classList.add("hide");
    
}

//let win=["","","","","","","","",""]; AL=( alternate logic): to conclude draw and winner 

let winnercondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
    box.classList.add("clicked");  
            if(isx){
            box.innerText="X";
//            win[index]="X";// AL
//            console.log(index); AL
            isx=false;
        }
        else{
            box.innerText="O";
//            win[index]="O"; AL
//            console.log(index); AL
            isx=true;

        }

        box.disabled = true;
        count++;
        let iswinner =winner();// returning a value true in the function that means we have found the winner bec its in if 

        if(count==9 && !iswinner){
            gamedraw();
        }

    });
});

const gamedraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebuttons();
}

const disablebuttons=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
};

const enablebuttons=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
        boxes.classList.remove("clicked");
    }
};

const showwinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebuttons();
};

const winner= ()=>{
    for (let patterns of winnercondition){
        let val1=box[patterns[0]].innerText;
        let val2=box[patterns[1]].innerText;
        let val3=box[patterns[2]].innerText;
        
        
        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1===val2 && val2===val3){
                console.log("   winer",val1);
                showwinner(val1);
                return true ;
            }
        }
    }
};


reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
