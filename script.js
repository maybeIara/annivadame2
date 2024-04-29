var correctAnswers = ["rouge", "violet", "vert"];
var responses = ["", "", ""];

function checkAnswer(questionNumber) {
    var answer = document.getElementById('answer' + questionNumber).value.trim();
    var responseBox = document.getElementById('response' + questionNumber);
    responseBox.innerHTML = "";

    if (answer === correctAnswers[questionNumber - 1]) {
        responses[questionNumber - 1] = "OUAISSSS";
    } else {
        responses[questionNumber - 1] = "Mauvaise réponse cretinus. Ré-essaye.";
    }

    // Afficher les réponses pour chaque question
    for (var i = 0; i < responses.length; i++) {
        document.getElementById('response' + (i + 1)).innerHTML = responses[i];
    }

    // Vérifier si toutes les réponses sont correctes
    if (responses.every(response => response === "OUAISSSS")) {
        document.getElementById('final-response').innerHTML = "<p>T'ES CHAUUUDDDDD Indice pour le prochain endroit</p>";
        document.getElementById('car-image').style.display = 'block';
    } else {
        document.getElementById('final-response').innerHTML = "";
        document.getElementById('car-image').style.display = 'none';
    }
}
