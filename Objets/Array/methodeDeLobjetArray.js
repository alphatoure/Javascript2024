let tabNom = ["Saliou", "Aldiouma", "Mamadou", "Ibrahima"], p=""
 tabNom.push("NamDam")
console.log(tabNom);

for(let i=0; i< tabNom.length; i++){
    p+= "le prenom n° " + (i+1) + ' est : '+ tabNom[i]+ '\n';
}
console.log(p);

