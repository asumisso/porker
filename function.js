function draw() {
    var random = Math.floor(Math.random() * deck.length);
    var c = deck[random];
    deck.splice(random, 1);
    return c;
}


function checkHand() {

      go.sort(function(a, b) {
        if (a.num < b.num) return -1;
        if (a.num > b.num) return 1;
        return 0;
    });

    if ((go[0].suit == go[1].suit) && (go[1].suit == go[2].suit) && (go[2].suit == go[3].suit) && (go[3].suit == go[4].suit)) {
        if (go[0].num == 9) {
            document.getElementById("yaku").innerHTML = "<p>ロイヤルストレートフラッシュ！</p>";
        } else if ((go[4].num - go[0].num) == 4) {
            document.getElementById("yaku").innerHTML = "<p>ストレートフラッシュ!</p>";
        } else {
            document.getElementById("yaku").innerHTML = "<p>ふらっしゅ!</p>";
        }

    } else if ((go[0].num == go[3].num) || (go[1].num == go[4].num)) {
        document.getElementById("yaku").innerHTML = "<p>フォーカード!</p>";


    } else if (((go[0].num == go[2].num) && (go[3].num == go[4].num)) || ((go[0].num == go[1].num) && (go[2].num == go[4].num))) {
        document.getElementById("yaku").innerHTML = "<p>フルハウス!</p>";


    } else if ((go[4].num - go[3].num == 1) && (go[3] - go[2] == 1) && (go[2] - go[1] == 1) && (go[1] - go[0] == 1)) {
        document.getElementById("yaku").innerHTML = "<p>ストレート!</p>";
    } else if ((go[0].num == go[2].num) || (go[1].num == go[3].num) || (go[2].num == go[4].num)) {
        document.getElementById("yaku").innerHTML = "<p>スリーカード!";
    } else if (((go[0].num == go[1].num) && (go[2].num == go[3].num)) || ((go[1].num == go[2].num) && (go[3].num == go[4].num)) || ((go[0] == go[1]) && (go[4] == go[5]))) {
        document.getElementById("yaku").innerHTML = "<p>ツーペア!</p>";
    } else if ((go[0].num == go[1].num) || (go[1].num == go[2].num) || (go[2].num == go[3].num) || (go[3].num == go[4].num)) {
        document.getElementById("yaku").innerHTML = "<p>ワンペア!</p>";
    } else {
        document.getElementById("yaku").innerHTML = "<p>ハイカード!</p>";
    }
}





function hyouji() {
    var aNode = document.getElementById("formform");
    for (var i = aNode.childNodes.length - 1; i >= 0; i--) {
        aNode.removeChild(aNode.childNodes[i]);
    }

    for (i = 0; i < go.length; i++) {
        if (go[i].num == 13) {
            var num = "A";
        } else if (go[i].num == 12) {
            var num = "K";
        } else if (go[i].num == 11) {
            var num = "Q";
        } else if (go[i].num == 10) {
            var num = "J";
        } else if (go[i].num == 9){
            var num = "10";    
        } else if (go[i].num == 8){
            var num = "9";
        } else if (go[i].num == 7){
            var num = "8";
        } else if (go[i].num == 6){
            var num = "7";
        } else if (go[i].num == 5){
            var num = "6";
        } else if (go[i].num == 4){
            var num = "5";
        } else if (go[i].num == 3){
            var num = "4";
        } else if(go[i].num == 2){
            var num = "3";
        } else if(go[i].num == 1){
            var num = "2";
        } else if(go[i].num == 0){
            var num = "1";
        }else {
            var num = go[i].num + 2;
        }
        if (go[i].suit == "HEART") {
            var suit = "<span style='color:red'>♥</span>";
        } else if (go[i].suit == "SPADE") {
            var suit = "♠";
        } else if (go[i].suit == "DIA") {
            var suit = "<span style='color:red'>♦</span>";
        } else {
            var suit = "♣︎";
        }


        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name","nameCheckbox");
        checkbox.setAttribute("class", "classCheckbox");
        checkbox.setAttribute("id", "idCheckbox"+i);
        checkbox.setAttribute("onclick","changeColor("+i+");")
        document.getElementById("formform").appendChild(checkbox);



        var card = document.createElement("div");
        card.setAttribute("class", "classCard");
        card.setAttribute("id","idCard" +i);
        card.innerHTML = "<span class='topnum'>" + num + "</span><span class='topsuit'>" + suit + "</span><span class='btmsuit'>" + suit + "</span><span class='btmnum'>" + num + "</span>";
        document.getElementById("formform").appendChild(card);
    }
}


function exchange() {
    console.log("交換!");
    for (var i = 0; i < 5; i++) {
        if (document.form.elements[i].checked) {
            go.splice(i, 1);
            go.splice(i, 0, draw());
            console.log(go[i]);
        }
    }

    checkHand();
    hyouji();
}



function changeColor(num){
  var check = document.getElementById("idCheckbox"+num);
  var colorarea = document.getElementById("idCard"+num);
  if(check.checked == true){
    console.log("yahho-");
    colorarea.style.backgroundColor = 'yellow';
  }else{
    colorarea.style.backgroundColor = 'white';
  }

}





