class NewApp {
    constructor(Name) {
        this.Name = Name;
        var Windows = document.getElementById("Windows");
        Windows.innerHTML += this.Name;
    }
}
