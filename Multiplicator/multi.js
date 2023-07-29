let table = document.getElementById("myTable");

let headerRow = table.insertRow(0);
let cell = headerRow.insertCell();
cell.innerHTML = "";

for (let j = 1; j <= 10; j++) {
    cell = headerRow.insertCell();
    cell.innerHTML = j;
}

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = i;

    for (let j = 1; j <= 10; j++) {
        cell = row.insertCell();
        cell.id = i + "-" + j;
        cell.innerHTML = "<input type='number'>";
        cell.addEventListener("input", function() {
            let product = i * j;
            let input = Number(this.firstChild.value);
            if (input === product) {
                this.classList.remove("red");
                this.classList.add("green");
            } else {
                this.classList.remove("green");
                this.classList.add("red");
            }
        });
    }
}


