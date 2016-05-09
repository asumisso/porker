var deck = []; //全カード
var suit = ["HEART", "DIA", "CLUB", "SPADE"]; //連想配列で使ってる
var go = []; //ごまいぬいてる

//全カード並べてる
for (var j = 0; j < suit.length; j++) {
    for (var i = 0; i < 13; i++) {
        var object = {
            suit: suit[j],
            num: i
        }
        deck.push(object);
    }
}

//ランダムで５枚とってる
for (var i = 0; i < 5; i++) {
    go.push(draw());
}

//そーとして数字順に並べている
checkHand();
//表示
hyouji();

//デバッグ用
for (var i = 0; i < go.length; i++) {
    console.log(go[i]);
}

