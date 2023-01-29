const MyButton1 = document.querySelector("#boutton1")

function reactionClick() {
    let clickme1 = document.getElementById("boutton1")
    clickme1.innerHTML="Commenter"
    document.getElementById("boutton1").style.backgroundColor = "dodgerblue"
}

MyButton1.addEventListener("click", reactionClick)


const MyButton2 = document.querySelector("#boutton2")

function reactionClick1() {
    let clickme2 = document.getElementById("boutton2")
    clickme2.innerHTML="Commenter"
    document.getElementById("boutton2").style.backgroundColor = "dodgerblue"
}

MyButton2.addEventListener("click", reactionClick1) 


const avatar =  document.querySelector(".avatar")
const cartes = document.querySelectorAll(".card")
const lien = document.querySelectorAll(".lien")

function ChangeRotationCard(event){

    lien[2].classList.add("ChangeColor")

    cartes.forEach((carte) => {
        carte.style.transform = "rotate(360deg)"
    })
}

avatar.addEventListener("click", ChangeRotationCard)
















//const LeNomDeMonVoisin = (nom) => {
//    console.log(`Je m'appelle ${nom}`);
//    return(`Je m'appelle ${nom}`);
//};
//
//LeNomDeMonVoisin(`Hervé`);


//let HeureDuJour = new Date();
//let hours = HeureDuJour.getHours() + ":" + HeureDuJour.getMinutes() + ":" + HeureDuJour.getSeconds();
//console.log(`Exécution du message :`, hours);

//let DateduJour = new  Date();
//let date = DateduJour.getUTCDate() + ":" + DateduJour.getMonth()+1 + ":" + DateduJour.getFullYear();
//console.log(`La date du jour est :`, date );




//function capitalize(nom, prenom) {
//    const firstLetterNomMaj = nom.charAt(0).toUpperCase()
//    const resteDuNom = nom.substring(1)
//  const firstLetterPrenomMaj = prenom.charAt(0).toUpperCase()
//    const resteduPrénom = prenom.substring(1)

//    console.log(`Hello ${firstLetterNomMaj}${resteDuNom} ${firstLetterPrenomMaj}${resteduPrénom}`)

//}

//capitalize("picot", "louise")



//function evenOrOdd(number){
//    if (number %2 == 0){
//       return("Le nombre est pair")
//    } else {
//      return("Le nombre est impaire")
//}
//}

//console.log(evenOrOdd(3))

//const numbers = [-1 , 4, -2, 9, 18];
//const numbers2 = [15,16,17,1000];

//function sumOfNegative(numbers){
//    let somme = 0
//    numbers.forEach((number) => {
//        if (number <0){
//            somme += number
//        }
//    });
//        return (somme)
//}
//    console.log(sumOfNegative(numbers))
 //   console.log(sumOfNegative(numbers2))

    
