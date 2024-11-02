
// NOT EKLEME

document.addEventListener("DOMContentLoaded", function() {
    const notesContainer = document.querySelector(".notes-container")
    const addNotesButton = document.querySelector(".notes")
    let noteArray = JSON.parse(localStorage.getItem("noteArray")) || [];

    addNotesButton.addEventListener("click", addNote)

    function addNote() {
        addNotesIU();
        addNotesStorage();
    }

    function addNotesIU(content = "") {
        const div = document.createElement("div");
        const removeNote = document.createElement("div");
        const noteContent = document.createElement("textarea");

        div.className = "notes";
        removeNote.className = "fa-solid fa-trash-can";
        removeNote.id = "remove-note";
        noteContent.className = "note-content";
        noteContent.value = content;

        div.appendChild(noteContent);
        div.appendChild(removeNote);
        notesContainer.appendChild(div);

        noteContent.addEventListener("input", (e) => {
            const index = Array.from(notesContainer.children).indexOf(div);// bütün notlardan üzerine işlem yaptığımız divin indeksini yakalar
            noteArray[index-1] = e.target.value;
            localStorage.setItem("noteArray", JSON.stringify(noteArray));
        });

        removeNote.addEventListener("click", () => {
            const index = Array.from(notesContainer.children).indexOf(div);
            noteArray.splice(index-1, 1);//noteArray dizisinden verilen indexten başlayarak 1 eleman siler 
            localStorage.setItem("noteArray", JSON.stringify(noteArray));
            div.remove();
        });
    }

    function addNotesStorage() {
        const noteContents = document.querySelectorAll(".note-content");
        noteArray = Array.from(noteContents).map(note => note.value);
        localStorage.setItem("noteArray", JSON.stringify(noteArray));
    }

    function checkNotesFromStorage() {
        noteArray.forEach(content => addNotesIU(content));
    }

    checkNotesFromStorage();
});


