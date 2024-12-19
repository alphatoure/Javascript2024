/*  function avec parametre nom */
console.log("Exercice 1 ");
function greet(name){
    console.log(`Bonjour ${name}`)
}
greet('Amadou N\'diaye')
greet('Samba Diallo')
console.log("**********************************");
console.log("\n");

/* function avec plusieurs parametres */
console.log("Exercice 2");

function calculate(num1, num2, operateur){
     let resultat = 0;
   switch(operateur){
     case '+' :
        resultat = num1 + num2
        break;
     case '-' : 
        resultat = num1 - num2
        break;
     case '*' : 
        resultat = num1 * num2
        break
     case '/' :
            if(num2 != 0){
                resultat = num1 / num2
            }else{
                console.log('Erreur de division');
              
            }
            break;

     default : resultat = 'Operateur Invalide'
        }

   return resultat
    
}
console.log(calculate(9,5 , '+'));
console.log(calculate(2,8 , '-'));
console.log(calculate(3,5 , '*'));
console.log(calculate(12,5 , '/'));
console.log(calculate(30,0 , '/'));
console.log(calculate(8,7 , '%'));
console.log("**********************************");
console.log("\n");


/* Aire du rectangle  */
console.log("Exercice 3");

function calculateArea(longueur, largeur){
    return longueur * largeur
}
console.log(calculateArea(8, 12));
console.log(calculateArea(6, 45));
console.log(calculateArea(21, 9));
console.log("**********************************");

/** function imbrique */

console.log("Exercice 4");
function outer(){
    function inner(){
        console.log('Bonjour');
        
    }
    inner()
}
outer()
console.log("**********************************");
console.log("\n");

/** Portée des variables */
console.log("Exercice 5");

let variableGlobale = "je suis globale ";
function portevariable(){
 let variableLocale = "Je suis local a la function";
 console.log(variableGlobale);
 console.log(variableLocale);
 
 
}
portevariable()
console.log(variableGlobale);
//  console.log(variableLocale); erreur: variableLocale is not defined
 console.log("\n");
 console.log("Nombre aleatoire");

 function aleatoire(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min
 }
 let aleatoireNombre = aleatoire(1, 10)
 console.log(aleatoireNombre);

 console.log("\n");
 console.log("Maximun");

 function findMax(arr){
    return Math.max(...arr)

 }
 let numbersTable = [12, 6, 56, 17 ,9 ]
 let  maximum = findMax(numbersTable)
 console.log(maximum);
 
 