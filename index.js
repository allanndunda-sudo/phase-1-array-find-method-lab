// code your solution h

function superbowlWin(record){
    const win = record.find(game => game.result === "W")
    return win ? win.year : undefined;
}