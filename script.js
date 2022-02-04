var btnA1 = document.getElementById('btnA1');
var btnA2 = document.getElementById('btnA2')
var btnA3 = document.getElementById('btnA3')
var btnA4 = document.getElementById('btnA4')
var btnA5 = document.getElementById('btnA5')
var btnA6 = document.getElementById('btnA6')
var btnA7 = document.getElementById('btnA7')
var btnA8 = document.getElementById('btnA8')
var btnA9 = document.getElementById('btnA9')
var btnA10 = document.getElementById('btnA10')
var btnA11 = document.getElementById('btnA11')
var btnA12 = document.getElementById('btnA12')
var btnA13 = document.getElementById('btnA13')
var btnA14 = document.getElementById('btnA14')
var btnA15 = document.getElementById('btnA15')
var btnA16 = document.getElementById('btnA16')
var btnA17 = document.getElementById('btnA17')
var btnA18 = document.getElementById('btnA18')
var btnA19 = document.getElementById('btnA19')
function interact() {

    //'src', 'images/Yellow_lg.png'
    // this.disabled = true;
    //if( btnA1.src == "images/WhitePiece_lg.png"){
    //}
    
}


const handleClick = evt =>{
    console.log(evt.target.id);
    switch(evt.target.id){
        case'btnA1':
   // btnA1.style.visibility = "hidden";
    btnA1.innerHTML = "Black";
    console.log("Clicked on the Thing");
    break;
    case 'btnA2':
        btnA2.style.borderColor = 'rgb(160, 31, 31)';
        break;
    case 'btnA3':
        btnA3.innerHTML = "Black";
        break;
    case "btnA4":
        btnA4.innerHTML = "Black";
        break;
    case 'btnA5':
        btnA5.innerHTML = "Black";
        break;
    case 'btnA6':
        btnA6.innerHTML = "Black";
        break;
    case 'btnA7':
        btnA7.innerHTML = "Black";
        break; 
    case 'btnA8':
        btnA8.innerHTML = "Black";
        break; 
    case 'btnA9':
        btnA9.innerHTML = "Black";
        break;
    case 'btnA10':
        btnA10.innerHTML = "Black";
        break;
    case 'btnA11':
        btnA11.innerHTML = "Black";
        break;
    case 'btnA12':
        btnA12.innerHTML = "Black";
        break;
    case 'btnA13':
        btnA13.innerHTML = "Black";
        break;
    case 'btnA14':
        btnA14.innerHTML = "Black";
        break;
    case 'btnA15':
        btnA15.innerHTML = "Black";
        break;
    case 'btnA16':
        btnA16.innerHTML = "Black";
        break;
    case 'btnA17':
        btnA17.innerHTML = "Black";
        break;
    case 'btnA18':
        btnA18.innerHTML = "Black";
        break;
    case 'btnA19':
        btnA19.innerHTML = "Black";
        break;

    }   
}


btnA1.addEventListener('click',handleClick);
btnA2.addEventListener('click', handleClick); 
btnA3.addEventListener('click', handleClick); 
btnA4.addEventListener('click', handleClick); 
btnA5.addEventListener('click', handleClick); 
btnA6.addEventListener('click', handleClick); 
btnA7.addEventListener('click', handleClick); 
btnA8.addEventListener('click', handleClick); 
btnA9.addEventListener('click', handleClick); 
btnA10.addEventListener('click', handleClick);
btnA11.addEventListener('click', handleClick);
btnA12.addEventListener('click', handleClick);
btnA13.addEventListener('click', handleClick);
btnA14.addEventListener('click', handleClick);
btnA15.addEventListener('click', handleClick);
btnA16.addEventListener('click', handleClick);
btnA17.addEventListener('click', handleClick);
btnA18.addEventListener('click', handleClick);
btnA19.addEventListener('click', handleClick);