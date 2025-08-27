let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionsButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let spacingButtons = document.querySelectorAll(".spacing");

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
];

const intializer = () => {
  hightlighter(alignButtons,true)
  hightlighter(spacingButtons,true)
  hightlighter(formatButtons,true)
  hightlighter(scriptButtons,true)

  

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advancedOptionsButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter URL:");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLInk = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

const hightlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        hightlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      }
      else{
        button.classList.toggle("active")
      }
    });
  });
};

const hightlighterRemover = (className)=>{
    className.forEach((button)=>{
        button.classList.remove("active")
    })
}

window.onload = intializer();
