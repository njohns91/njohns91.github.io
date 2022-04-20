function scriptTest() {
    alert("Sweet I did this right!");
}
function hello() {
    let name = document.getElementById("name").value;
    let emotion = document.getElementById("emotion").value;
    document.getElementById("hello").innerHTML = ("<p>The Navy Jaguars welecomes you, " + name + "! You are feeling " + emotion + " today!")
}

function question() {
    document.getElementById("question").innerHTML = ("Ehhh maybe")
}

function jaguar() {
    document.getElementById("jaguar").innerHTML = ("I hope you haven't. The answer is no!")
}

function math() {
    var answer = (6+4)*7+1
    document.getElementById("math").innerHTML = "The answer is: " + answer;
}

function plans() {
    let myinput = prompt (
        "Do you have any plans this weekend? Yay or Nay?"
    );

    let weekend = "";

    if(myinput == "Yay" || "yay") {
        weekend = "I hope you have a fun time going out!"
    } else {
        weekend = "Well I guess theres always next weekend..."
    }
    document.getElementById("plans").innerHTML = weekend
}

function here() {
    alert ("HI!")
}
