function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var id = document.querySelector("#nested");
  return id.querySelector(".target");
}

function increaseRankBy(n){
  var li = document.querySelectorAll(".ranked-list li");
  for(let i = 0; i < li.length; i++){
    let num = parseInt(li[i].innerHTML) + n;
    li[i].innerHTML = num;
  }
}