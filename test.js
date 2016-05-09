// var array = [1, 100, 'test', 'abc', [1, 2]],
//     hash  = {a : 1, b : 2, c : { d : 3, e : 4}};
 
// if (array[1]) {
//     console.log("aa");
// }
 
// if ((hash.a)&&(hash.b)) {
//     console.log(hash.b);
// }

// var a = [5,3,9,1,10]
// a.sort(function(a,b){
//         if( a < b ) return -1;
//         if( a > b ) return 1;
//         return 0;
// });

// console.log(a);

// var fruits = [
//    {name:"apple",price:100},
//    {name:"orange",price:98},
//    {name:"banana",price:50},
//    {name:"melon",price:500},
//    {name:"mango",price:398}
// ]

// fruits.sort(function(a,b){
//     if(a.price<b.price) return -1;
//     if(a.price > b.price) return 1;
//     return 0;
// });
// console.log(fruits)







var deck = [];//全カード
var suit = ["HEART", "DIA"];//連想配列で使ってる
var gomai = [];//ごまいぬいてる


//全カード並べてる
for (var j = 0; j < suit.length; j++) {
    for (var i = 0; i < 4; i++) {
        var object = {
            suit: suit[j],
            num: i
        }
        deck.push(object);
    }
}


//ランダムで５枚とってる
for (var i = 0; i < 2; i++) {
    var random = Math.floor(Math.random() * deck.length);
    // console.log(deck[random]);
    gomai.push(deck[random]);
    deck.splice(random, 1);

}


//数字順に並べている
gomai.sort(function(a,b){
        if( a.num < b.num ) return -1;
        if( a.num > b.num ) return 1;
        return 0;
});

for (var i = 0; i < gomai.length; i++) {
console.log(gomai[i]);
}

gomai.sort(function(a,b){
    if (a.suit == b.suit) {
        console.log("あってる");
    }else{
        console.log("ちがう");
    }

});



// // 数値として昇順にソートする
// function compareNumbersAsc(a, b) {
//     return  a - b;
// }
// // 数値として降順にソートする
// function compareNumbersDsc(a, b) {
//     return  b - a;
// }

// myArray = new Array(5, 2, 4, 10);
// // 文字列としてSORT    --- ソート結果(10, 2, 4, 5)
// myArray.sort();
// console.log(myArray);
// //数値として昇順にSORT --- ソート結果(2, 4, 5, 10)
// myArray.sort(compareNumbersAsc);
// console.log(myArray);
// //数値として降順にSORT --- ソート結果(10, 5, 4, 2)
// myArray.sort(compareNumbersDsc);
// console.log(myArray);

