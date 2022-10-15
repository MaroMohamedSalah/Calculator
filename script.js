// selection 
let theme1 = document.getElementById("th1");
let theme2 = document.getElementById("th2");
let theme3 = document.getElementById("th3");
let toggle = document.getElementById("toggle");
let buttons = document.querySelectorAll(".body div");
let result = document.getElementById("screen");
let reset = document.getElementById("reset");
let del = document.getElementById("del");
let power = document.getElementById("power");
let division = document.getElementById("division");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let one = document.getElementById("1");
let tow = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("zero");
let r = document.querySelector(':root');


// handel themes 
theme1.onclick = () =>{
    toggle.style.left = '4px' ;
    // backgrounds
    r.style.setProperty('--mainBackground', 'hsl(222, 26%, 31%)');
    r.style.setProperty('--toggleBackground', 'hsl(223, 31%, 20%)');
    r.style.setProperty('--screenBackground', 'hsl(224, 36%, 15%)');

    // keys
    r.style.setProperty('--keyBackground', 'hsl(225, 21%, 49%)');
    r.style.setProperty('--keyBackground2', 'hsl(6, 63%, 50%)');
    r.style.setProperty('--keyBackground3', 'hsl(30, 25%, 89%)');
    // keys shadow
    r.style.setProperty('--keyShadow', 'hsl(224, 28%, 35%)');
    r.style.setProperty('--keyShadow2', 'hsl(6, 70%, 34%)');
    r.style.setProperty('--keyShadow3', 'hsl(28, 16%, 65%)');

    // Text
    r.style.setProperty('--textColor1', 'hsl(221, 14%, 31%)');
    r.style.setProperty('--textColor2', 'white');
    r.style.setProperty('--textColor3', 'hsl(221, 14%, 31%)');
    r.style.setProperty('--textColor4', 'white');
}
theme2.onclick = () =>{
    toggle.style.left = '24px' ;
    // backgrounds
    r.style.setProperty('--mainBackground', 'hsl(0, 0%, 90%)');
    r.style.setProperty('--toggleBackground', 'hsl(0, 5%, 81%)');
    r.style.setProperty('--screenBackground', 'hsl(0, 0%, 93%)');

    // keys
    r.style.setProperty('--keyBackground', 'hsl(185, 42%, 37%)');
    r.style.setProperty('--keyBackground2', 'hsl(25, 98%, 40%)');
    r.style.setProperty('--keyBackground3', 'hsl(45, 7%, 89%)');
    // keys shadow
    r.style.setProperty('--keyShadow', 'hsl(185, 58%, 25%)');
    r.style.setProperty('--keyShadow2', 'hsl(25, 99%, 27%)');
    r.style.setProperty('--keyShadow3', 'hsl(35, 11%, 61%)');

    // Text
    r.style.setProperty('--textColor1', 'hsl(60, 10%, 19%)');
    r.style.setProperty('--textColor2', 'hsl(0, 0, 100%)');
    r.style.setProperty('--textColor3', 'hsl(60, 10%, 19%)');
    r.style.setProperty('--textColor4', 'hsl(0, 0, 100%)');
}
theme3.onclick = () =>{
    toggle.style.left = '44px' ;
        // backgrounds
        r.style.setProperty('--mainBackground', 'hsl(268, 75%, 9%)');
        r.style.setProperty('--toggleBackground', 'hsl(268, 71%, 12%)');
        r.style.setProperty('--screenBackground', 'hsl(268, 71%, 12%)');
    
        // keys
        r.style.setProperty('--keyBackground', 'hsl(281, 89%, 26%)');
        r.style.setProperty('--keyBackground2', 'hsl(176, 100%, 44%)');
        r.style.setProperty('--keyBackground3', 'hsl(268, 47%, 21%)');
        // keys shadow
        r.style.setProperty('--keyShadow', 'hsl(285, 91%, 52%)');
        r.style.setProperty('--keyShadow2', 'hsl(177, 92%, 70%)');
        r.style.setProperty('--keyShadow3', 'hsl(290, 70%, 36%)');
    
        // Text
        r.style.setProperty('--textColor1', 'hsl(0, 0, 100%)');
        r.style.setProperty('--textColor2', 'white');
        r.style.setProperty('--textColor3', 'hsl(52, 100%, 62%)');
        r.style.setProperty('--textColor4', 'hsl(52, 100%, 62%)');
}

// handel click
if(localStorage.getItem("screenValue")){
    result.textContent = localStorage.getItem("screenValue");
}else{
    result.textContent = "";
}
let temp= []; 
reset.onclick = () =>{
    result.textContent = ""
    addToLocalStorage(result.textContent);
}
del.onclick = () =>{
    temp = [...result.textContent.trim()]
    temp.pop();
    result.textContent = temp.join('');
    addToLocalStorage(result.textContent);
}
equal.onclick = () =>{
    result.textContent = eval(result.textContent);
    addToLocalStorage(result.textContent);
}
plus.onclick = () =>{
    result.textContent = result.textContent + '+';
    addToLocalStorage(result.textContent);
}
minus.onclick = () =>{
    result.textContent = result.textContent + '-';
    addToLocalStorage(result.textContent);
}
division.onclick = () =>{
    result.textContent = result.textContent + '/';
    addToLocalStorage(result.textContent);
}
power.onclick = () =>{
    result.textContent = result.textContent + '*';
    addToLocalStorage(result.textContent);
}
one.onclick = () =>{
    result.textContent = result.textContent + '1';
    addToLocalStorage(result.textContent);
}
tow.onclick = () =>{
    result.textContent = result.textContent + '2';
    addToLocalStorage(result.textContent);
}
three.onclick = () =>{
    result.textContent = result.textContent + '3';
    addToLocalStorage(result.textContent);
}
four.onclick = () =>{
    result.textContent = result.textContent + '4';
    addToLocalStorage(result.textContent);
}
five.onclick = () =>{
    result.textContent = result.textContent + '5';
    addToLocalStorage(result.textContent);
}
six.onclick = () =>{
    result.textContent = result.textContent + '6';
    addToLocalStorage(result.textContent);
}
seven.onclick = () =>{
    result.textContent = result.textContent + '7';
    addToLocalStorage(result.textContent);
}
eight.onclick = () =>{
    result.textContent = result.textContent + '8';
    addToLocalStorage(result.textContent);
}
nine.onclick = () =>{
    result.textContent = result.textContent + '9';
    addToLocalStorage(result.textContent);
}
zero.onclick = () =>{
    result.textContent = result.textContent + '0';
    addToLocalStorage(result.textContent);
}
dot.onclick = () =>{
    result.textContent = result.textContent + '.';
    addToLocalStorage(result.textContent);
}

function addToLocalStorage(value) {
    localStorage.setItem("screenValue" , value);
}