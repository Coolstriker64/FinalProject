const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let playerShips = 0;
function generateBoard(tar){
    console.log("Generating "+tar+" Board...");
    var rows = 5;
    var cols = 5;
    var difficulty = "";
    var target = tar;
    //difficulty = form.elements["difficulty"].value;
    //var other = form.elements["otherFeatures"];
    var selectors = "";
    // for(let feature of other){
    //     if(feature.checked){
    //         selectors += feature.value + " ";
    //     }
    // }
    console.log(rows + " " + cols);
    var board = "<table id=\"gameBoard\" class=\"" + difficulty + " \">" + "\n" + "<caption>" + selectors +"</caption>" + "\n" + "<tbody>" + "\n";
    board += "<tr class=letterBorder><th class=\"corner\"></th>";
    for(let i = 0; i<cols; i++){
        board += "<th>" + alphabet[i] + "</th>";
    }
    board += "</tr>" + "\n";
    for(let i = 0; i<rows; i++){
        board += "<tr class=\"numCord\">" + "<th>" + (i + 1) + "</th>";
        for(let b = 0; b<cols; b++){
            var tempit = i + 1
            var tempid = alphabet[b] + "," + tempit
            board += "<td id=\"" + tempid + "\"> </td>";
        }
        board += "</tr>" + "\n";
    }
    board += "</tbody>" + "\n" + "</table>";
    console.log(board);
    document.getElementById(target).innerHTML = board;
    document.getElementById("startButt").value = "REcalibrate Tactical Map";
    document.getElementById("startButt").disable = true;
}
function placePlayer(){
    console.log("Placing Player Ships...");
    console.log("Placing Pelican...");
    var xcord = document.getElementById("colsin").value;
    console.log(xcord);
    var ycord = document.getElementById("rowsin").value;
    console.log(ycord);
    var target = xcord.toUpperCase() + "," + ycord;
    console.log(target);
    document.getElementById(target).innerText = "X";
    //Reset Input
    document.getElementById("colsin").value = "";
    document.getElementById("rowsin").value = "";
    //Make sure correct ships have been placed.
    playerShips = playerShips + 1;
    console.log(playerShips)
    if(playerShips >= 3){
        console.log("All ships accounted for.");
        beginBattle();
    }
}
function setUpEnemy(){
    console.log("Placing Enemy Ships...");
    generateBoard("npc");
}
function beginBattle(){
    console.log("Beginning engagement...")
    //Disable Placement controls
    document.getElementById("colsin").disabled = true;
    document.getElementById("rowsin").disabled = true;
    document.getElementById("placeShipButt").disabled = true;
}
function startGame(){
    generateBoard("player");
    document.getElementById("colsin").disabled = false;
    document.getElementById("rowsin").disabled = false;
    document.getElementById("placeShipButt").disabled = false;
    setUpEnemy();
}