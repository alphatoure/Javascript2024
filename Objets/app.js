 let rplce  = "J'apprends le javascript "
  let moi = {
     nom: "Toure",
     prenom: "Alpha",
     age: 25,
     identite: function(){
        return 'prenom : ' + this.prenom +
        '\nNom : '+ this.nom + 
        '\nAge : '+ this.age
     }

  }

    alert(moi.identite)
    alert(moi.identite( ))