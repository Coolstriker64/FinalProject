function generateBoard(tar){
    console.log("Generating "+tar+" Board...")
    var rows = 5;
    var cols = 5;
    var difficulty = ""
    var target = tar
    //difficulty = form.elements["difficulty"].value;
    //var other = form.elements["otherFeatures"];
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
}
function placePlayer(){
    console.log("Placing Player Ships...");
    console.log("Placing Pelican...");
    var xcord = document.getElementById("colsin").value;
    console.log(xcord);
    var ycord = document.getElementById("rowsin").value;
    console.log(ycord);
    var target = xcord + "," + ycord
    console.log(target)
    document.getElementById(target).innerText = "X"
}
function setUpEnemy(){
    console.log("Placing Enemy Ships...");
    generateBoard("npc");
}

function startGame(){
    generateBoard("player");
    setUpEnemy();
}