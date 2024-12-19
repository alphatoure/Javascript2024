 class mymathse {
    constructor(p, n, a) {
        this.prenom = p
        this.nom = n
        this.age = a
    }
}
 let mastey = new mymathse("Numerios", "Era", 89)
 let trimat = new mymathse("batasi", "munimbe", 22)
 let dorto = mastey
 console.log(dorto);
 
 dorto.prenom = " marby "
 
 console.log("Prenom mastey :" + mastey.prenom +
    "\n prenom dorto : "+ dorto.prenom
 );

//  let litteralObj = {
//     prenom: 'Samba',
//     nom    : 'Diallo',
//     age    : 34
//  }
//  console.log(litteralObj);
 
 