window.onload = polygon();

function polygon() {
   
    let userInput = parseFloat(prompt("The Navy Jaguars wants you to enter a number 1-10 so it can tell you what its called."));
    
    let sides = Math.round(Math.abs(userInput));

    
    switch (sides) {
        case 1:
            alert("The monogon is the name of this polygon!");
            break;

        case 2:
            alert("The bigon is the name of this polygon!");
            break;

        case 3:
            alert("The triangle is the name of this polygon!");
            break;

        case 4:
            alert("The quadrilateral is the name of this polygon!");
            break;

        case 5:
            alert("The pentagon is the name of this polygon!");
            break;

        case 6:
            alert("The hexagon is the name of this polygon!");
            break;

        case 7:
            alert("The septagon is the name of this polygon!");
            break;

        case 8:
            alert("The octagon is the name of this polygon!");
            break;

        case 9:
            alert("The nonagon is the name of this polygon!");
            break;

        case 10:
            alert("The decagon is the name of this polygon!");
            break;

        default:
            //If it's invalid input, present an error message and run the function again
            alert("Input Error: Please enter a number 1-10.");
            polygonCalculator();
            break;
    }
}