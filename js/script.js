let myLabel = document.getElementById("label"),
    basic = document.getElementById("basic-price"),
    pro = document.getElementById("pro-price"),
    master = document.getElementById("master-price");

myLabel.onclick = function(){
    myLabel.classList.toggle("anually");
    
    if(myLabel.classList.contains("anually") ==true){
    basic.textContent = "199.99";
    pro.textContent = "249.99";
    master.textContent = "399.99";
    } else {
        basic.textContent = "19.99";
        pro.textContent = "24.99";
        master.textContent = "39.99";
    }

}


