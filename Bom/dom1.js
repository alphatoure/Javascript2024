/**
 * @param {{title: string, body:strng}}post
 * @return {HTMLElement}
 * 
 */
function createArticle(post){
    const  art = document.createElement('article')
       
    //   const h2 = document.createElement('h2')
    //   h2.innerText = post.title
      art.append(createElementWidthText('h2', post.title))
      
      art.append(createElementWidthText('p', post.body))
       return art
   }
   function createElementWidthText(tagName, content){
    const element = document.createElement(tagName)
    element.innerText = content
    return element
   }   
   async function maFunction(){
       const restart = document.querySelector('#lastpost')
       const chargeur = document.createElement('p')
       chargeur.innerText = 'chargement ...'
       restart.append(chargeur)
       try{
           const r = await fetch('https://jsonplaceholder.typicode.com/posts?limit=5', {
               headers: {
                   Accept: 'application/json'
               }
           })
            if(!r.ok){
               throw new Error('Ereeur serveur')
           }
           const posts = await r.json()
       
           chargeur.remove()
           for(let post of posts){
               restart.append(createArticle(post))
           }
       }catch(e){
           chargeur.innerText ='impossible de charger les articles'
           chargeur.style.color = 'red'
           return;
       }
   }
   maFunction()