

import "./index.css"
import logo from  "./download.png"
document.getElementById("logo").src  = logo;

let notes = JSON.parse(localStorage.getItem("notes")) || []
showNotes()
document.getElementById("submit").addEventListener("click",()=>{
    let textarea = document.getElementById("note-content").value;

    if(textarea.length>5) {
        notes.push(textarea)

        localStorage.setItem("notes",JSON.stringify(notes))
        showNotes()
    }
})

function showNotes() {

   let noteC = document.getElementById("saved-notes")
 noteC.innerHTML = ""
   notes.map((note)=>{
    let div = document.createElement("div")
    div.classList.add("note-box")
    div.innerText = note
    noteC.append(div)
   })

} 


