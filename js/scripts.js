
var numReplace = function(inputNum) {
    var arrayFill = []
    for (var i = 1; i <= inputNum; i++) {
      if (i % 15 === 0) {
        arrayFill.push(" pizza-pie!");
    } else if (i % 3 === 0) {
        arrayFill.push(" pizza!");
    } else if (i % 5 === 0) {
        arrayFill.push(" pie!");
    } else {
        arrayFill.push(" " + i);
    }
  };
  return arrayFill;
};



$(document).ready(function(){
  $("form#pizzaPie").submit(function(event) {
    var inputNum = parseInt($("input#userInput").val());

    var resultArray = numReplace(inputNum)
    var result = resultArray.toString();

    $("#result").show();
    $("#resultNums").append(result);

  event.preventDefault();
  });
});


// var numReplace = function(inputNum) {
//       if (inputNum % 15 === 0) {
//         return ("pizza-pie!");
//     } else if (inputNum % 3 === 0) {
//         return ("pizza!");
//     } else if (inputNum % 5 === 0) {
//         return ("pie!");
//     } else {
//         return ("i");
//     }
//   };
