//var elements = ["img1-left", "img2-left", "img3-left"]
//
////
//
//var RandomValue = Math.floor(Math.random() * 3);
//
//document.getElementById(elements[RandomValue]).style.visibility="visible";


//var img1 = document.getElementById("img1-left");
//var img2 = document.getElementById("img2-left");
//var img3 = document.getElementById("img3-left");
//
//var images = [img1, img2, img3];
//
//for( var item of images) {
//    if(item.style.visibility="visible") {
//        console.log("found it" + item.alt);
//    }
//}

//################### show Visibility #######################

function showVisibility() {
    var img1 = document.getElementById("img1-left");
    var img2 = document.getElementById("img2-left");
    var img3 = document.getElementById("img3-left");

    var images = [img1, img2, img3];

    var img1_right = document.getElementById("img1-right");
    var img2_right = document.getElementById("img2-right");
    var img3_right = document.getElementById("img3-right");

    var images_right = [img1_right, img2_right, img3_right];

//##################### check Visibility ##################3 

function checkVisibilty( ...array) {
    for(let i = 0; i < 3; i++) {
        if(array[i].style.visibility === "visible")
            return array[i].alt;
    }
}

 //console.log( checkVisibilty(images[0], images[1], images[2]), checkVisibilty( images_right[0], images_right[1], images_right[2]));

    var display_left = checkVisibilty(images[0], images[1], images[2]);
    //console.log(display_left);
    var display_right = checkVisibilty( images_right[0], images_right[1], images_right[2]);
    //console.log(display_right);
    
    setDefault();
    
    showResult( display_left, display_right);
    
    }

//################ show Img ######################

 function showImg() {
    var elements = ["img1-left", "img2-left", "img3-left"];
    var RandomValue = Math.floor(Math.random() * 3);
        for(var item of elements) {
            document.getElementById(item).style.visibility="hidden";
        }
        document.getElementById(elements[RandomValue]).style.visibility="visible";
        
        showVisibility();
}

//################## showImg1 #####################

function showImg1() {
     document.getElementById("img1-right").style.visibility="visible";
     document.getElementById("img2-right").style.visibility="hidden";

     document.getElementById("img3-right").style.visibility="hidden";                   
     showImg();

    }

//###################### showImg2 #######################

function showImg2() {
     document.getElementById("img1-right").style.visibility="hidden";
     document.getElementById("img2-right").style.visibility="visible";
     document.getElementById("img3-right").style.visibility="hidden";   
     showImg();
}

//####################### showImg3 #######################

function showImg3() {
    document.getElementById("img1-right").style.visibility="hidden";
    document.getElementById("img2-right").style.visibility="hidden";
    document.getElementById("img3-right").style.visibility="visible";
    showImg();
}

//####################### showResult ########################

function showResult( left_value, right_value) {
    //console.log("hey there");
    var arg1 = left_value;
    var arg2 = right_value;
    
    if( (arg1 === "Scissors") && (arg2 === "Rock")) {
           // console.log("hi");
        showResult_win();
       }
    if( arg1 === "Rock" && arg2 === "Paper") {
           // console.log("hi");
        showResult_win();
    }
    if( arg1 === "Paper" && arg2 === "Scissors") {
           // console.log("hi");
        showResult_win();
    }
    if( arg1 === "Scissors" && arg2 === "Paper") {
        showResult_lose();
    }
    if( arg1 === "Paper" && arg2 === "Rock") {
        showResult_lose();
    }
    if( arg1 === "Rock" && arg2 === "Scissors") {
        showResult_lose();
    }
    
    
}

//######################## setDefaults #####################

function setDefault() {
    let x = document.getElementById("result-win");
    console.log("hi");
    if(x.className !== "result-left") {
        console.log("hey there");
        x.className = "result-left";
    }
    
    let y = document.getElementById("result-lose");
    if(y.className !== "result-right") {
        y.className = "result-right";
    }
}


//######################## showResult_win ################

function showResult_win() {
    let x = document.getElementById("result-win");
    //console.log("hi");
    if(x.className === "result-left") {
        x.className += "-1";
        //console.log(x.className);
    }
    else {
        x = "result-left";
    }
}

//####################### showResult_lose ##################
                    
function showResult_lose() {
    let x = document.getElementById("result-lose");
    //console.log("hi");
    if(x.className === "result-right") {
        x.className += "-1";
        //console.log(x.className);
    }
    else {
        x = "result-right";
    }
}