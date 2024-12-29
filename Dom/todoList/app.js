import { todoList } from "./components/todoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

 try{
     // sauvegarder les données dans une variable todos
     
     const todos = await fetchJSON('https://jsonplaceholder.typicode.com/posts?_limit=5')

        // Creation de l'element todoList
     const list = new todoList(todos)

     list.appendTo(document.querySelector('#todolist'))

 }catch(e){
    // Creation de l'ele alerteElement
      const  alerteElement =  createElement('div',{
            class: 'alert alert-danger m-2',
            role: 'alert'
        })
        // Attribution  du message pour l'element alerteElement
        alerteElement.textContent = 'Impossible de charger les elements'
        document.body.prepend(alerteElement)
 }
