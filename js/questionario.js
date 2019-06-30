class Resposta {
    constructor(q1, q2, q3, q4) {
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.resposta = -1;
    }
    getRespostaChar() {
        let r = '0';
        if (resposta === -1)
            return -1;
        switch (resposta) {
            case 1:
                r = 'a';
                break;
            case 2:
                r = 'b';
                break;
            case 3:
                r = 'c';
                break;
            case 4:
                r = 'd';
                break;
            default:
                r = -1;
                break;
        }
        return r;
    }
}
let questionario = [];
let n = 0;
questionario.push(new Resposta("Bom Companheiro", "Audacioso", "Sensível", "Bom-Humorado"));
questionario.push(new Resposta("Inseguro", "Astucioso", "Crítico", "Desmotivado"));
questionario.push(new Resposta("Simpático", "Líder", "Fiel", "Diplomata"));
questionario.push(new Resposta("Impulsivo", "Insensível", "Antissocial", "Introvertido"));
questionario.push(new Resposta("Afável", "Eficiente", "Idealista", "Líder"));

questionario.push(new Resposta("Indisciplinado", "Vaidade", "Amuado", "Pretencioso"));
questionario.push(new Resposta("Entusiasta", "Prático", "Esteta", "Atencioso"));
questionario.push(new Resposta("Barulhento", "Raivoso", "Pessimista", "Provocador"));
questionario.push(new Resposta("Compreensivo", "Energético", "Perfeccionista", "Conservador"));
questionario.push(new Resposta("Exagerado", "Sarcástico", "Teórico", "Desconfiado"));

questionario.push(new Resposta("Crédulo", "Resoluto", "Dedicado", "Eficiente"));
questionario.push(new Resposta("Medroso", "Impaciente", "Vingativo", "Indeciso"));
questionario.push(new Resposta("Comunicativo", "Independente", "Leal", "Tranquilo"));
questionario.push(new Resposta("Volúvel", "Prepotente", "Egoísta", "Calculista"));
questionario.push(new Resposta("Destacado", "Otimista", "Inflexivel", "Calmo"));

/*
questionario.push(new Resposta("Exagerado", "Intolerante", "Vingativo", "Bem-Humorado"));
questionario.push(new Resposta("Medroso", "Insensível", "Inflexível", "Desmotivado"));
*/

function mostrar() {
    let s = '';
    let rb1 = document.getElementById("exampleRadios1");
    let rb2 = document.getElementById("exampleRadios2");
    let rb3 = document.getElementById("exampleRadios3");
    let rb4 = document.getElementById("exampleRadios4");
    if (rb1.checked)
        s = 'r1'
    else if (rb2.checked)
        s = 'r2'
    else if (rb3.checked)
        s = 'r3'
    else if (rb4.checked)
        s = 'r4'
}
function geraGrafico() {
    let p = [];
    let c = [];
    for (let i = 0; i < 4; i++)
        c[i] = 0;
    for (let i = 0; i < questionario.length; i++)
        c[questionario[i].resposta]++;
    for (let i = 0; i < 4; i++) {
        //p[i] = Math.round((c[i] * 100) / questionario.length);
        p[i] = Math.floor(((c[i] * 100) / questionario.length) * 20) / 20;
    }

    new Chart(document.getElementById("horizontalBar"), {
        "type": "horizontalBar",
        "data": {
            "labels": ["Sanguíneo", "Colérico", "Melancólico", "Fleumático"],
            "datasets": [{
                "label": "Percentual em Temperamento",
                "data": [p[0], p[1], p[2], p[3]],
                "fill": false,
                "backgroundColor": [
                    "rgba(0, 255, 44, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 131, 0, 0.2)",
                    "rgba(75, 192, 192, 0.2)"
                ],
                "borderColor": ["rgb(0, 175, 31)", "rgb(255, 159, 64)", "rgb(228, 117, 0)", "rgb(75, 192, 192)"
                ],
                "borderWidth": 1
            }]
        },
        "options": {
            "scales": {
                "xAxes": [{
                    "ticks": {
                        "beginAtZero": true
                    }
                }]
            }
        }
    });
    let x = document.getElementById("formquest");
    //x.style.display = "block";
    x.style.display = "none";
    n = 0;
    /*$('#rodapeQuest').css(
        {
            'max-height': '5%',
        }
    );*/
}


function proximo() {
    let rb1 = document.getElementById("exampleRadios1");
    let rb2 = document.getElementById("exampleRadios2");
    let rb3 = document.getElementById("exampleRadios3");
    let rb4 = document.getElementById("exampleRadios4");
    let lbl = document.getElementById("tituloquestionario");
    if (n === questionario.length-1) {
        if (rb1.checked) {
            questionario[n].resposta = 0;
            geraGrafico();
        }
        else if (rb2.checked) {
            questionario[n].resposta = 1;
            geraGrafico();
        }
        else if (rb3.checked) {
            questionario[n].resposta = 2;
            geraGrafico();
        }
        else if (rb4.checked) {
            questionario[n].resposta = 3;
            geraGrafico();
        }
        else
            alert('Selecione uma Opção!!!');
    }
    else {
        if (rb1.checked) {
            questionario[n].resposta = 0;
            atualizaQuestionario(1);
        }
        else if (rb2.checked) {
            questionario[n].resposta = 1;
            atualizaQuestionario(1);
        }
        else if (rb3.checked) {
            questionario[n].resposta = 2;
            atualizaQuestionario(1);
        }
        else if (rb4.checked) {
            questionario[n].resposta = 3;
            atualizaQuestionario(1);
        }
        else
            alert('Selecione uma Opção!!!');
    }
}
function anterior() {
    let rb1 = document.getElementById("exampleRadios1");
    let rb2 = document.getElementById("exampleRadios2");
    let rb3 = document.getElementById("exampleRadios3");
    let rb4 = document.getElementById("exampleRadios4");
    let lbl = document.getElementById("tituloquestionario");
    if (n - 1 >= 0) {
        if (rb1.checked) {
            questionario[n].resposta = 0;
            //atualizaQuestionario(-1);
        }
        else if (rb2.checked) {
            questionario[n].resposta = 1;
            //atualizaQuestionario(-1);
        }
        else if (rb3.checked) {
            questionario[n].resposta = 2;
            //atualizaQuestionario(-1);
        }
        else if (rb4.checked) {
            questionario[n].resposta = 3;
            //atualizaQuestionario(-1);
        }
        atualizaQuestionario(-1);
    }
}
function atualizaQuestionario(d) {
    let rb1 = document.getElementById("q1");
    let rb2 = document.getElementById("q2");
    let rb3 = document.getElementById("q3");
    let rb4 = document.getElementById("q4");
    let lbl = document.getElementById("tituloquestionario");

    let in1 = document.getElementById("exampleRadios1");
    let in2 = document.getElementById("exampleRadios2");
    let in3 = document.getElementById("exampleRadios3");
    let in4 = document.getElementById("exampleRadios4");
    //if (n + d < questionario.length && n + d >= 0) 
    {
        n += d;
        rb1.textContent = questionario[n].q1;
        rb2.textContent = questionario[n].q2;
        rb3.textContent = questionario[n].q3;
        rb4.textContent = questionario[n].q4;
        lbl.textContent = (n + 1).toString() + ") Selecione uma Caracteristica";
        switch (questionario[n].resposta) {
            case 0:
                in1.checked = true;
                break;
            case 1:
                in2.checked = true;
                break;
            case 2:
                in3.checked = true;
                break;
            case 3:
                in4.checked = true;
                break;
            default:
                in1.checked = in2.checked = in3.checked = in4.checked = false;
                break;
        }
    }

}