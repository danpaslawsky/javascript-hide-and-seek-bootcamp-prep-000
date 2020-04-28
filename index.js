function getFirstSelector(selector){
  return document.querySelector(selector);
 }

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('.target')[0];  
 }

function increaseRankBy(n){
  const listArray = document.getElementById('app').querySelectorAll('.ranked-list li');
   for (let i = 0; i < listArray.length; i++) {
  listArray[i].innerHTML = (parseInt(listArray[i].innerHTML) + n);
 }

}

function deepestChild(){
 var nodes = document.querySelectorAll('#grand-node div');
var mostDeep = nodes[nodes.length- 1];
 return mostDeep;
 }
 
 
 //var goingDeep = document.getElementById('grand-node').querySelectorAll('div');
  //for (let i = 0; i < goingDeep.length; i++){
    //goingDeep[i].innerHTML = goingDeep;
  //  return goingDeep;