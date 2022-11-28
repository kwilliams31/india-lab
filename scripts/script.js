
  // function myFunction() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("shirtCheck");
  //   // Get the output text
  //   var text = document.getElementById("shirts");
  
  //   // If the checkbox is checked, display the output text
  //   if (checkBox.checked == true) {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  // }

// $('#userArray').append(
//   `
//   <div class="card col-md-4">
//   <div class="card-body">
//     <h4 class="card-title">${ userArray[index].name }'s Games</h4>
//     <a id="button" class="btn btn-secondary" href=${ gamerArray[index].gameUrl } target="_blank">${ gamerArray[index].gameName }</a>
//   </div>
// </div>
//   `
// )

//  let userArray = [
//   {
//     email: "email"
//     pwd: "password"
//   }
//  ]


let userData = ["email", "password"];
  let userJSON = {
    email: "sharkman@oceanmail.com",
    pwd: "*****",
    phone: "123-456-7890"
  };

  $("#loadData").click(() => {

    $("#email").val(userJSON.email);

    $("#pwd").val(userJSON.pwd);

    $("#phone").val(userJSON.phone);
  });


  // getting submit button after verification
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("submitButton");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  // radio button for dependant input
  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); // Yes or No
    let newFishList = getFish(radioChoice);
    console.log(newFishList);

    let optionList = "";

    for (i = 0; i < newFishList.length; i++) {
      optionList += `<option value=" ${newFishList[i]} ">${newFishList[i]} </option>`;
    }
    $("#fishSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
  });

function getFish(fishType) {
// getting array list if user checks yes
  let yesArray = ["Manta Ray", "Seahorse", "Parrot Fish", "Shark", "Other"];
  let noArray= ["Thank you", "I would like to see a certain plant"]

  if (fishType === "yes") {
    return yesArray; }
  else if (fishType === "no") {
    return noArray; } 
  else {
    return ["Thank you"];
  }
}

// displaying input from user
function testVariable() {
  var strText = document.getElementById("email").value;          
  var strText1 = document.getElementById("pwd").value;
  var strText2 = document.getElementById("phone").value;
  var result = 'email: ' + strText + ' password: ' + strText1 + ' phone: ' + strText2;
  document.getElementById('spanResult').textContent = result;
   
}
  
// input value from submit bar
  var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayemail);


function displayemail() {
  el.preventDefault();
  // grab the value of the user input
  var elName = document.getElementById("email");
  //do something with it
// need to put info somewhere??
}

$("#submitButton").click(function () {
  if ($("#email").val()) {
    console.log("bro, the user has made an input");
    $("#email").removeClass("error");
  } else {
    console.log("bro, the user did not input");
    $("#email").removeClass("success").addClass("error").focus();
    //bring focus to it
    //change the placeholder text
  }
});


