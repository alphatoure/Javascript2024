
// crer une fonction qui va generer un article
/**
 * creer un element HTML representant un article
 * @param {{title: string, body:string}} post 
 * @returns {HTMLElement}
 */
function createArticles(post){
    const article = document.createElement('article')
    article.innerHTML= `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `
    // renvoi un element HTML
    return article
}

async function main(){
    /** L'element dans lequelle on va rajouter nos articles */
const wrapper= document.querySelector('#lastpost')
// L'element chargement
const loader = document.createElement('p')
loader.innerText = 'Chargement en cours...'
wrapper.append(loader)
try{
/** Sauvegarder la reponse dans r */
 const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5',{
    headers: {
        'Accept': 'application/json'
    }
})
// Si r n'est pas ok on remplace le chargement en cours par un message d'erreur
if(!r.ok){
   throw new Error('Erreur serveur')
}
// Si tout est ok on remplace le chargement en cours par un message de succes
const posts = await r.json()


// supprimer le Loader
loader.remove()

// parcours chaque article depuis le tableau des articles
for(const post of posts){
    // creer un element pour chaque article
    const article = createArticles(post)
    // ajouter l'article dans le wrapper
    wrapper.append(article)}
}catch(e){
    // Afficher le message d'erreur
    loader.innerText = "Impossible de charger les articles"

    // retourner le message en d'erreur en couleur rouge
    loader.style.color = 'red'
    // Arreter l'execution de la fonction
    return;
}
}
main()