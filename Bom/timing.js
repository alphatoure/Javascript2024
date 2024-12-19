
setTimeout(function(){
 document.getElementById('.make-bigger').style.fontSize = "250%"
}, 5000);
let d = 0
let interval
document.querySelector('.start').addEventListener('click',() =>{
    interval = setInterval(() =>{
        let date = new Date()
        let hour = date.getHours()      < 10 ? "0" + date.getHours()   : date.getHours()
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        let seconde = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        d += 1
        document.querySelector('.timer').textContent = hour + ':' + minutes + ':' + seconde
    //  console.log("I was logged after 2 secs", d);
     
    },500)

})
document.querySelector('.stop').addEventListener('click', ()=>{
 clearInterval(interval)
})