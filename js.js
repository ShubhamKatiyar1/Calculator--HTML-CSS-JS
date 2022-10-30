var display=document.getElementById("inp");
var string="";
var buttons=document.querySelectorAll(".btn");
buttons.forEach(function(e){
    e.addEventListener("click", function()
    {
        var value=this.getAttribute("data-value");
        if(value=="+")
        {
            display.innerText+="+";
        }
        else if(value=="-")
        {
            display.innerText+="-";
        }
        else if(value=="*")
        {
            display.innerText+="*";
        }
        else if(value=="/")
        {
            display.innerText+="/";
        }
        else if(value=="=")
        {
            display.innerText=eval(display.textContent);
        }
        else if(value=="clear")
        {
            display.innerText="";
        }
        else if(value=="backspace")
        {
            display.innerText=display.textContent.substring(0,display.textContent.length-1);
        }
        else if(value=="inverse")
        {
            display.innerText=display.textContent*-1;
        }
        else{
            display.innerText+=value;
        }

    });
});
