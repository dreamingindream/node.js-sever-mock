var btn = document.getElementById("btn");
//console.log(btn);
var ul = document.getElementsByTagName("ul")[0];
//console.log(ul);
var page = 1;

btn.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("get", "data" + page, true)
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      var data = JSON.parse(xhr.responseText);
      //console.log(data);
      for(var i = 0; i < data.info.length; i++){
        var li = document.createElement("li");
        li.innerHTML = data.info[i];
        //console.log(li);
        ul.appendChild(li);
      }
      if(data.hasNext === "true"){
        page += 1;
      }else{
        //btn.disabled = true;
        btn.disabled = true;
        btn.innerHTML = "no more!";
      }

    }    
  }
}, false)

