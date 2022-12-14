const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const rows = 5;
const cols = 5;
let playerShips = 0;
let pShip1 = "";
let pShip2 = "";
let pShip3 = "";
let eShip1 = "";
let eShip2 = "";
let eShip3 = "";
let playerPoints = 0;
let enemyPoints = 0;
let ePoints = 0;


function generateBoard(tar){
    console.log("Generating "+tar+" Board...");
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
    document.getElementById("startButt").disabled = true;
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
    assignShip(target); //Create Ship with coords
    //Reset Input
    document.getElementById("colsin").value = "";
    document.getElementById("rowsin").value = "";
    //Make sure correct ships have been placed.
    playerShips = playerShips + 1;
    console.log("PShips :" + playerShips)
    if(playerShips >= 3){
        console.log("All ships accounted for.");
        getPlayer();
        beginBattle();
    }
}
function assignShip(coords){
    shipnum = playerShips + 1;
    console.log("Creating Ship num " + shipnum + " at position: " + coords);
    document.getElementById(coords).innerText = "X";
    if(shipnum == 1){
        pShip1 = coords;
    }
    else if(shipnum == 2){
        pShip2 = coords;
    }
    else if(shipnum == 3){
        pShip3 = coords;
    }
    else{
        console.log("Player Ship Var Error! Failed at: " + shipnum);
    }
}
function getPlayer(){
    console.log("Player Ship1 "+ pShip1);
    console.log("Player Ship2 "+ pShip2);
    console.log("Player Ship3 "+ pShip3);
}
function makeRandCoords(){
    const min = 1;
    const max = 5;
    xcord = Math.floor(Math.random() * (max - min + 1)) + min;
    b = Math.floor(Math.random() * (max - min + 1)) + min;
    a = alphabet[xcord - 1];
//    console.log(a);
//    console.log(b);
    var coords = "" + a + "," + b;
    console.log(coords);
    return coords;
}
function setUpEnemy(){
    console.log("Placing Enemy Ships...");
    //generateBoard("npc");
    for(let i = 0; i < 3; i++){
        target = makeRandCoords();
        createEShip(i,target);
    }
    getEnemy();
}
function createEShip(shipnum, target){
    coords = target;
    if(shipnum == 0){
        eShip1 = coords;
    }
    else if(shipnum == 1){
        eShip2 = coords;
    }
    else if(shipnum == 2){
        eShip3 = coords;
    }
}
function getEnemy(){
    console.log("Enemy Ship 1 " + eShip1);
    console.log("Enemy Ship 2 " + eShip2);
    console.log("Enemy Ship 3 " + eShip3);
}
function beginBattle(){
    console.log("Beginning engagement...")
    alert("RED ALERT: Slip Space Ruptures Detected! Spooling Weapon Systems...")
    alert("CRITICAL SCANNER ERROR! Manual Targeting Activated. Blind Fire required...")
    //Disable Placement controls
    document.getElementById("placeShipButt").hidden = true;
    document.getElementById("shootbutt").hidden = false;
}
function startGame(){
    generateBoard("player");
    document.getElementById("colsin").disabled = false;
    document.getElementById("rowsin").disabled = false;
    document.getElementById("placeShipButt").disabled = false;
    setUpEnemy();
}
function playerHit(target){
    alert("Direct Hit! Enemy Ship Destroyed!");
    playerPoints++;
    document.getElementById("combatLog").innerText += "\n" + target + ": Ship Destroyed";
    winCheck();
}
function fire(){
    alert("Fireing round...");
    var xcord = document.getElementById("colsin").value;
    var ycord = document.getElementById("rowsin").value;
    var target = xcord.toUpperCase() + "," + ycord;
    console.log("fireing on: " + target);
    //document.getElementById("combatLog").innerText += target + " :: ";
    if(target == eShip1){
        eShip1 = "Dead";
        playerHit(target);
    }
    else if(target == eShip2){
        eShip2 = "Dead";
        playerHit(target);
    }
    else if(target == eShip3){
        eShip3 = "Dead";
        playerHit(target);
    }
    else{
        alert("No impact detected")
        document.getElementById("combatLog").innerText += "\n" + target + ": miss"
    }
    retaliate();
}
function EnemyHit(coords){
    alert("ALERT: Direct Hit!");
    alert("Ship Destroyed!");
    document.getElementById(coords).innerText = "O";
    enemyPoints++;
    winCheck();
}
function retaliate(){
    target = makeRandCoords();
    if(target == pShip1){
        pShip1 = "Dead";
        EnemyHit(target);
    }
    else if(target == pShip2){
        pShip2 = "Dead";
        EnemyHit(target);
    }
    else if(target == pShip3){
        pShip3 = "Dead";
        EnemyHit(target);
    }
    else{
        alert("All ships accounted for")
    }
}
function ADretaliate(target){
    if(target == pShip1){
        pShip1 = "Dead";
        EnemyHit(target);
    }
    else if(target == pShip2){
        pShip2 = "Dead";
        EnemyHit(target);
    }
    else if(target == pShip3){
        pShip3 = "Dead";
        EnemyHit(target);
    }
    else{
        alert("All ships accounted for")
    }
}
function winCheck(){
    if(playerPoints == 3){
        alert("ENEMY DEFEATED! WE ARE VICTORIOUS!");
        alert("Please Recalibrate map");
        document.getElementById("combatLog").innerText += "\n" + "RELOAD PAGE TO CONTINUE!";
    }
    else if (enemyPoints == 3){
        alert("ALL SHIPS DESTROYED!")
        alert("AI Recommendation: Retreat if possible");
        alert("YOU LOSE." + "\n" + "Please Recalibrate map");
        document.getElementById("combatLog").innerText += "\n" + "RELOAD PAGE TO CONTINUE!";
    }
}