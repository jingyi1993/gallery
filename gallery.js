function showproperties(element){
    document.getElementById("click").innerHTML=element.alt;
    document.getElementById("click").style.backgroundImage="url(" + element.src+ ")";
}
function recover(element) {
    document.getElementById('click').innerHTML='hover over a image';

    document.getElementById("click").style.backgroundColor=element;
    document.getElementById("click").style.backgroundImage="url('#')";

}