const cisloJedna = Number(prompt("Napiš první číslo"))
const cisloDva = Number(prompt("Napiš druhé číslo"))
const cisloTri = Number(prompt("Napiš třetí číslo"))

let nejvetsiCislo = (cisloJedna, cisloDva, cisloTri) => {
    let vypis = document.querySelector("#cislo")

    if(cisloJedna >= cisloDva && cisloJedna >= cisloTri){
        vypis.textContent = cisloJedna
    } else if(cisloDva >= cisloJedna && cisloDva >= cisloTri){
        vypis.textContent = cisloDva
    } else {
        vypis.textContent = cisloTri
    }
}

nejvetsiCislo(cisloJedna, cisloDva, cisloTri)