let a = document.querySelector(".ProooH1")
let btn = document.querySelector(".whibb2")
let btn2 = document.querySelector(".whibb1")
let re = document.querySelector(".tttimg")
let rr = document.querySelector(".tttimg2")


btn.onclick = () => {
    a.innerHTML = "Spake Gray"
    btn.style.background = ("#c7e3ff")
    btn.style.color = ("#89898a")
    btn2.style.color = ("white")
    btn2.style.background = ("blue")
    rr.style.display = ("none") 
    re.style.display = ("block") 
}
btn2.onclick = () => {
    a.innerHTML = "White"
    btn2.style.background = ("#c7e3ff")
    btn2.style.color = ("#89898a")
    btn.style.color = ("white")
    btn.style.background = ("blue")
    re.style.display = ("none") 
    rr.style.display = ("block") 
}

let ff = document.querySelector(".Dollarr1")
let f = document.querySelector(".gbssd1")
let fe = document.querySelector(".gbssd2")
let fa = document.querySelector(".gbssd3")
let d = document.querySelector(".gbssd4")

f.onclick = () => {
    ff.innerHTML = "$1,999"
    f.style.border = ("3px solid royalblue")
    fe.style.border = ("3px solid rgb(135, 255, 215)")
    fa.style.border = ("3px solid rgb(135, 255, 215)")
    d.style.border = ("3px solid rgb(135, 255, 215)")
}
fe.onclick = () => {
    ff.innerHTML = "$2,199"
    fe.style.border = ("3px solid royalblue")
    f.style.border = ("3px solid rgb(135, 255, 215)")
    fa.style.border = ("3px solid rgb(135, 255, 215)")
    d.style.border = ("3px solid rgb(135, 255, 215)")
}
fa.onclick = () => {
    ff.innerHTML = "$2,599"
    fa.style.border = ("3px solid royalblue")
    fe.style.border = ("3px solid rgb(135, 255, 215)")
    d.style.border = ("3px solid rgb(135, 255, 215)")
    f.style.border = ("3px solid rgb(135, 255, 215)")
}
d.onclick = () => {
    ff.innerHTML = "$3,199"
    d.style.border = ("3px solid royalblue")
    fa.style.border = ("3px solid rgb(135, 255, 215)")
    f.style.border = ("3px solid rgb(135, 255, 215)")
    fe.style.border = ("3px solid rgb(135, 255, 215)")
}