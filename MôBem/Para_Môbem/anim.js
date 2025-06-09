// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Para dona do sorriso mais belo que eu já vi!", time: 4 },
  { text: "Meu amor", time: 9 },
  { text: "Você é o meu presente mais lindo", time: 13 },
  { text: "a razão dos meus sorrisos mais sinceros", time: 18 },
  { text: "e a paz que acalma a minha alma.", time: 27 },
  { text: "Cada dia com você é uma nova descoberta", time: 33 },
  { text: "um novo motivo para te amar ainda mais.", time: 41 },
  { text: "Seu abraço é meu lar", time: 47 },
  { text: "seu olhar é meu refúgio", time: 54 },
  { text: "e seu amor é a minha maior inspiração.", time: 59 },
  { text: "Lembro de cada cartinha que escrevi", time: 67 },
  { text: "contando os dias para esse momento,", time: 72 },
  { text: "e agora, com você ao meu lado,", time: 78 },
  { text: "vejo que cada palavra, cada pensamento,", time: 83 },
  { text: "cada segundo de saudade valeu a pena.", time: 91 },
  { text: "Neste dia tão especial", time: 97 },
  { text: "quero celebrar a nossa história", time: 103 },
  { text: "a nossa conexão", time: 108 },
  { text: "Celebrar a promessa de um futuro repleto", time: 134 },
  { text: "de ainda mais amor", time: 140 },
  { text: "cumplicidade e felicidade.", time: 148 },
  { text: "Sou grato por cada risada,", time: 153 },
  { text: "por cada desafio superado juntos", time: 158 },
  { text: "e por cada momento que construímos.", time: 164 },
  { text: "e por cada momento que construímos.", time: 169 },
  { text: "Feliz Dia dos Namorados, meu eterno MôBem.", time: 176 },
  { text: "Que a gente possa celebrar nosso amor hoje", time: 183 },
  { text: "e em todos os dias da nossa vida.", time: 188 },
  { text: "Com todo o meu amor e a mais pura felicidade", time: 140 }, // Mantive essa linha para que apareça como um fechamento.
  { text: "Seu MôBem ❤️", time: 195 } 
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);