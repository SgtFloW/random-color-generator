const chalk = require("chalk");
const colorList = ["#ff0000", "#666666", "#999999", "#efefef", "#b7b7b7", "#444444"];
const col = 31;
const row = 12;

if (process.argv.length > 2) {
    let input = process.argv[2];
    let str = "";
    for (let i = 0; i < col; i++) {
        str = str + "#";
    }
    for (let i = 0; i < row; i++) {
        console.log(chalk.hex(input)(str));
    }
} else {
    let nbr = colorList[Math.floor(Math.random() * colorList.length)];
    let str = "";
    for (let i = 0; i < col; i++) {
        str = str + "#";
    }
    for (let i = 0; i < row; i++) {
        console.log(chalk.hex(nbr)(str));
    }
}
