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

function deepestChild(){
  var grand = document.querySelector("#grand-node");
  var grandChild = grand.querySelectorAll("div");
  for(let i = 0; i < grandChild.length; i++){
    var nextChild = grandChild[i].querySelectorAll("div");
    if(nextChild.length > 0){
      for(let x = 0; x < nextChild.length; x++){
        var nx = nextChild[x].querySelectorAll("div");
        if(nx.length === 0){
          return nextChild[x];
        }
      } 
    }    
  }
}