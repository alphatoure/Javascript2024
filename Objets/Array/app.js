let tabNom = ["Saliou", "Aldiouma", "Mamadou", "Ibrahima"]
let  compte = ""

for(let i =0 ; i < tabNom.length; i++){
    compte += "\n Prenom N° " + (i+1) + ' : '+ tabNom[i]
}
 console.log(compte);

 let litteralObj = {
    nom: "Yass",
    prenom: "Mass",
    age: 34
 }
 let jfk = ""
 for(let clefs in litteralObj ){
    jfk += "\n"+ clefs + ': '+ litteralObj[clefs]
 }
 console.log( jfk);
 