const words = ["seat", "keyboard", "ice", "mobile"];

function get(){
  const chars = "0123456789!@#$%^&*";
  const clength = chars.length;
  let passwords = "";

  while (passwords.length < 20) {
    passwords = passwords.concat(randomWord(chars.length));
    passwords = passwords.concat(chars[randomNumber(clength)]);
  }
  passwords = passwords.substring(0,16);
  document.getElementById('password').value = passwords
}

function randomNumber(l) {
  return Math.floor(Math.random() * l);
}

function randomWord() {
  const number = randomNumber(words.length);
  return words[number];
}
