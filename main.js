let money = +prompt("Alisher qancha puling bor (sumda kirit)")
let samalyot = 500 * 13000 //ustoz hozirgi kursda ishlasangiz ham boladi dedi
let mexmonxona = 250 * 13000 //dollar hozirgi kurs
let muzey = 120 * 14000  //yevro hozirgi kurs
let xarajatPuli = samalyot + mexmonxona + muzey

if(xarajatPuli <= money) {
    alert(money + " " + "Alisher oq yol")
} else{
    alert(money + " " + "Afsuski sabr qil Alisher pil yetmaydi")
}