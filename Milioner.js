        $("#lose").hide();
        
        var QA = {
            "game" : [
                {
                    "question" : "Како се нарекуваат копчињата кои се наоѓаат во најгорниот ред на тастатурата?",
                    "answers" : [
                        "Нумерички дел",
                        "Алфанумерички дел",
                        "Навигациски копчиња",
                        "Функциски копчиња",
                    ],
                    "answer" : "Функциски копчиња"
                },
                {
                    "question" : "Со употреба на излезни уреди можеме да ",
                    "answers" : [
                        "Внесуваме информации",
                        "Зачувуваме информации",
                        "Да гледаме и принтаме информации",
                        "Излезните уреди немаат никаква употреба",
                    ],
                    "answer" : "Да гледаме и принтаме информации"
                },
                {
                    "question" : "Кои од следните групи на уреди НЕ се влезни уреди",
                    "answers" : [
                        "Бар код читач, глувче, тастатура",
                        "Микрофон, Веб-камера",
                        "Слушалки, Монитор, Принтер",
                        "Џојстик, стилус , скенер ",
                    ],
                    "answer" : "Слушалки, Монитор, Принтер"
                },
                {
                    "question" : "Каков тип на уред е тастатурата?",
                    "answers" : [
                        "Излезен уред",
                        "Влезен уред",
                        "storage",
                        "Сите наведени",
                    ],
                    "answer" : "Влезен уред"
                },
                {
                    "question" : "Кој уред дозволува да се внесува податоци и инструкции во компјутер?",
                    "answers" : [
                        "Влезен уред",
                        "Излезен уред",
                        "ALU",
                        "Процесор",
                    ],
                    "answer" : "Влезен уред"
                },
                {
                    "question" : "Кој влезен уред се користи за внесување текст, броеви и команди на компјутерот?",
                    "answers" : [
                        "Глушец",
                        "Скенер",
                        "Тастатура",
                        "Сите",
                    ],
                    "answer" : "Тастатура"
                },
                {
                    "question" : "Првиот компјутерски глушец беше развиен од",
                    "answers" : [
                        "Даглас Енгелбарт",
                        "Вилијам англиски",
                        "Даниел Кахер",
                        "Роберт Заваски",
                    ],
                    "answer" : "Даглас Енгелбарт"
                },
                {
                    "question" : "Оптичкиот глушец е изграден од",
                    "answers" : [
                        "IBM, 1920 година",
                        "Интел, 1930 година",
                        "Мicrosoft, 1999 година",
                        "Dell, 2000 година",
                    ],
                    "answer" : "Мicrosoft, 1999 година"
                },
                {
                    "question" : "Првиот компјутерски глушец беше развиен од",
                    "answers" : [
                        "Даглас Енгелбарт",
                        "Вилијам англиски",
                        "Даниел Кахер",
                        "Роберт Заваски",
                    ],
                    "answer" : "Даглас Енгелбарт"
                },
                {
                    "question" : "Кои од наведените не се влезни уреди?",
                    "answers" : [
                        "Веб камера и микрофон",
                        "Читач на бар код и читач на паметни картички",
                        "Оптички читач на знаци и оптичко препознавање на знаци",
                        "Монитор и печатач",
                    ],
                    "answer" : "Монитор и печатач"
                },
                {
                    "question" : "Што од наведените не е излезен уред?",
                    "answers" : [
                        "Монитор",
                        "Печатач",
                        "Слушалки",
                        "Скенер",
                    ],
                    "answer" : "Скенер"
                },
                {
                    "question" : "Глувче предствува:",
                    "answers" : [
                        "Уред за покажување и спуштање",
                        "Уред за следење",
                        "Уред за контрола на курсорот",
                        "Сите наведени",
                    ],
                    "answer" : "Уред за контрола на курсорот"
                },
                {
                    "question" : "Кој тип на уред е веб камерата",
                    "answers" : [
                        "Влезен уред",
                        "Излезен уред",
                        "storage ",
                        "Сите наведени",
                    ],
                    "answer" : "Сите наведени"
                },
            ]
        }
        
        const countContainer = document.getElementById("timer");

        var remainingTime = 30;

        function renderTime() {
            remainingTime -= 1;

            countContainer.innerHTML = remainingTime;

            if (remainingTime === 0) {
                isStopped = true;
                clearInterval(timer);
                remainingTime = 30;
                End();
                $("#timer").hide("slow")
            }
        }

        function startTimer () {
            countContainer.innerHTML = remainingTime;
            timer = setInterval(renderTime, 1000);
        };

        function stopTimer () {
            isStopped = true;
            if (timer) {
              clearInterval(timer);
            }
          }

          function resetTimer () {
            isStopped = true;
            clearInterval(timer);
            remainingTime = 30;
            countContainer.innerHTML = remainingTime;
          };

        startTimer();

        var brojac = -1;
        
        console.log(QA);
        
        randomizeQuestions();

        randomizeAnwsers();
        
        console.log(QA);
        
        CreateQuestions();

        function CreateQuestions(){
            brojac++;

            var para = "";
                var btn = "";
                
                para += "<h2>" + QA.game[brojac].question + "</h2>";

                document.getElementById("question").innerHTML = para;
        
                for (let o = 0; o < 4; o++){
                    btn += "<button id='proba" + o + "'onclick='CallBack(this.innerHTML, this)'>" + QA.game[brojac].answers[o] + "</button>"
                }
                
                document.getElementById("answers").innerHTML = btn;
                
                console.log(brojac);
            }
            

    function CallBack(click_text, click_element) {
                if (click_text === QA.game[brojac].answer){
                    click_element.style.backgroundColor = "green";
                    resetTimer();
                    setTimeout( () => {
                        console.log("pogodok");
                        console.log(QA);
                            startTimer();
                            CreateQuestions();
                        }, 1000)
                    }
                    else{
                        stopTimer();
                        $("#timer").hide();
                        click_element.style.backgroundColor = "red";
                        setTimeout(() => {
                            for (let p = 0; p < 4; p++){
                            if($("#proba" + p).text() === QA.game[brojac].answer){
                                $("#proba" + p).css("background-color", "green");
                            }
                        }
                    }, 500);
                    setTimeout( () => {
                        End();
                        console.log("utka");
                    }, 1500)
                }
        }

        function randomizeQuestions(){
        Array.prototype.randomize = function()
        {
          var i = QA.game.length, j, temp;
          while ( --i )
          {
            j = Math.floor( Math.random() * (i - 1) );
            temp = QA.game[i];
            QA.game[i] = QA.game[j];
            QA.game[j] = temp;
          }
        };

        QA.game.randomize();
      }
      function randomizeAnwsers(){
            for (let y = 0; y < 6; y++){
        Array.prototype.randomize = function()
        {
          var i = QA.game[y].answers.length, j, temp;
          while ( --i )
          {
            j = Math.floor( Math.random() * (i - 1) );
            temp = QA.game[y].answers[i];
            QA.game[y].answers[i] = QA.game[y].answers[j];
            QA.game[y].answers[j] = temp;
          }
        };

            QA.game[y].answers.randomize();
        }
      }
      function End() {
        $("section").fadeOut("fast");
        $("#lose").fadeIn("slow");
        $("#lose button").click( function () {
            location.reload();
        })
    }