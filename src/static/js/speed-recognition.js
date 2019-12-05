window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

if (window.SpeechRecognition === null) {
  alert('Browser não dá suporte para reconhecimento de voz!')

}  else {

  // Iniciio o objeto que identifica
  const recognizer = new SpeechRecognition();

  let isRec = false;
  const btnStartRec = document.getElementById("startred");
  const resultRec = document.getElementById("resultrec");

  recognizer.onresult = (e) => {
      resultRec.innerText = '';
      console.log("FALANDO", e);

      for(let i = e.resultIndex; i < e.results.length ; i++) {
        console.log('ITEM', e.results[i]);
        const wordStr = e.results[i][0].transcript;

        if (e.results[i].isFinal) {
          resultRec.innerText += wordStr + " Convicção: " + e.results[i][0].confidence;  
        } else {
          resultRec.innerText += wordStr;
        }

      };
  };

    // Faz um toggle para iniciar/parar a Gravação
    btnStartRec.addEventListener('click', () => {
      if (!isRec) {
        isRec = true;
        recognizer.start();
        return;
      };

      isRec = false;
      recognizer.stop();
    });



}
