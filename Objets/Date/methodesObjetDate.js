let d     = new Date()
let dms   = d.getTime()
let dy    = d.getFullYear()
let dmo   = d.getMonth()
let dday  = d.getDay()
let ddate = d.getDate()
let dh    = d.getHours()
let dmi   = d.getMinutes()
let ds    = d.getSeconds()
let mois  = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
let jour  = ["Dimanche", "Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
console.log(`Nous somme le ${jour[dday]} ${ddate} ${mois[dmo]} ${dy} 
              il est ${dh}h : ${dmi}mn : ${ds}s`);
