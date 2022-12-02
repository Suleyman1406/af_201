const noteTitleInput = document.getElementById("note_title");
const noteDscrtiptionTextArea = document.getElementById("note_description");
const noteColorBtns = document.querySelectorAll("#note_color_container button");
const saveBtn = document.getElementById("save_btn");
const cardContainer = document.getElementById("card-container");

for (let i = 0; i < noteColorBtns.length; i++) {
  noteColorBtns[i].onclick = () => {
    let activeElement = document.getElementsByClassName("active")[0];

    if (activeElement) {
      activeElement.classList.remove("active");
      if (noteColorBtns[i] === activeElement) return;
    }
    noteColorBtns[i].classList.add("active");
  };
}

saveBtn.onclick = () => {
  if (!noteTitleInput.value.trim() || !noteDscrtiptionTextArea.value.trim()) {
    alert("Fill all!");
    return;
  }

  let noteColorBtnActive = document.getElementsByClassName("active")[0];

  if (!noteColorBtnActive) {
    alert("Choose color!");
    return;
  }

  // bura qoy RESUL!

  let noteCardDiv = document.createElement("div");
  noteCardDiv.className = "card";

  noteCardDiv.innerHTML = `<div>
            <h5>${noteTitleInput.value}</h5>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="Content_deleteBtn__mQsUR"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              ></path>
            </svg>
          </div>
          <div>
            <p>
              ${noteDscrtiptionTextArea.value}
            </p>
          </div>`;

  noteCardDiv.style.borderColor = noteColorBtnActive.name;
  noteCardDiv.firstElementChild.style.backgroundColor = noteColorBtnActive.name;
  noteCardDiv.firstElementChild.lastElementChild.onclick = () => {
    cardContainer.removeChild(noteCardDiv);
  };
  cardContainer.append(noteCardDiv);
};

// let myColorBtn = "";
// for (let i = 0; i < noteColorBtns.length; i++) {
//   console.log();
//   if (noteColorBtns[i].className.includes("active")) {
//     myColorBtn = noteColorBtns[i];
//     break;
//   }
// }

// if (!myColorBtn) {
//   alert("Choose color!");
//   return;
// }
