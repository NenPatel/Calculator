let screen = document.getElementById("screen");
let screenValue = "";
let buttons = document.querySelectorAll("button");
for(let item of buttons){
    item.addEventListener("click",(event) => {
        buttonText = event.target.innerText;
        console.log(buttonText);
        
        // if(buttonText=="*")
        // {
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        if(buttonText=="C")
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=="=")
        {
            screenValue = eval(screenValue);
            screen.value=screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}