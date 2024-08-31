function roledice() {
    let nd = Number(document.getElementById("dn").value);
    let res = document.getElementById("res");
    let resd = document.getElementById("res1");
    let ress = document.getElementById("res2");
    res.innerHTML = "";
    resd.innerHTML = "";
    ress.innerHTML = "";

    if (nd < 1) {
        res.innerHTML = "Enter a valid number of dice";
        return;
    }

    let ch = ""; 
    let ss=0
    for (let i = 0; i < nd; i++) {
        let n = Math.floor(Math.random() * 6) + 1;
        
        ss+=n
        ch += (i === 0 ? "" : ", ") + n;

        let img = document.createElement("img");
        img.src = `img/dice${n}.png`;
        img.alt = `Dice ${n}`;
        img.style.width = "50px";
        img.style.height = "50px"; 
        res.appendChild(img);
    }

    resd.innerHTML = ch;
    ress.innerHTML = `total sum of dices ${ss}`

}
