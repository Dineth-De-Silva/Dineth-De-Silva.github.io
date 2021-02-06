var Bg = document.getElementById("Bg");
var Bg1 = document.getElementById("Bg1");
var Badges = ["Windows", "Android", "Web"];
var Badges1 = [
    ["C#", "C", "Java", "Python"],
    ["Java", "Kotlin", "Flutter"],
    ["HTML", "CSS", "JS", "React"],
];
var colors = [
    ["deepskyblue", "blue", "brown", "darkgreen"],
    ["brown", "lightgreen", "deepskyblue"],
    ["orange", "red", "#ffeb3b", "black"],
];
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function demo() {
    while (true) {
        for (let i = 0; i < Badges.length; i++) {
            for (let j = 0; j < Badges1[i].length; j++) {
                Bg.innerHTML = Badges[i];
                Bg1.innerHTML = Badges1[i][j];
                Bg1.style = "color: " + colors[i][j] + ";";
                await sleep(4000);
            }
        }
    }
}
demo();
