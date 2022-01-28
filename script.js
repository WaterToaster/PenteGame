const btnA1 = document.getElementById('btnA1');

btnA1.onclick = function () {
    this.setAttribute('src', 'images/Yellow_lg.png');
    console.log("Clicked on the Thing");
    
   // this.disabled = true;
    //if( btnA1.src == "images/WhitePiece_lg.png"){
    //}
}

const handleClick = evt =>{
    console.log(evt.target.id);


}