const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (text.includes("hello")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "hi";
      texts.appendChild(p);
    }
    if (text.includes("hi")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "hello";
      texts.appendChild(p);
    }
    if (text.includes("who are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am Jessy, a voice assistant.";
      texts.appendChild(p);
    }
    if (text.includes("are you a human")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "No";
      texts.appendChild(p);
    }
    if (text.includes("are you a robot")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "yes";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Jessy";
      texts.appendChild(p);
    }
    if (text.includes("what you do")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I convert voice into text";
      texts.appendChild(p);
    }
    if (text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://youtube.com/@black-cat-kitten-channel");
    }
    if (text.includes("open spotify")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening spotify";
      texts.appendChild(p);
      console.log("opening spotify");
      window.open("https://open.spotify.com/");
    }
    if (text.includes("bye")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "goodbye, have a nice day!!";
      texts.appendChild(p);
    }
    if (text.includes("thank you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Welcome!!";
      texts.appendChild(p);
    }
    
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();