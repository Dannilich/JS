currentQuastion = 0; //задание номера стартового вопроса
qustions = { 
    // задание вопросов с возможными ответами и правильным ответом
    //типовая структура
   "0": {//номер вопроса
            "text":"Что является главным символом нового года ?", //текст вопроса
            //вопросы
            "1": "Мишура", 
            "2": "Ёлка",
            "3": "Мандарины",
            //номер правильного ответа
            "pass":"2"
        },
    
    "1": {
            "text":"Что поможет собрать всех друзей ?",
            "1": "Ссесия",
            "2": "Ёлка",
            "3": "Новогодний стол",
            "pass":"3"
        },
       
    "2": {
            "text":"Кто поможет украсить новый год ?",
            "1": "Рабочие",
            "2": "Друзья",
            "3": "Деньги",
            "pass":"2"
        },

    "3": {
            "text":"Важная часть нового года - это ...",
            "1": "Дарить подарки",
            "2": "читать книги",
            "3": "Каникулы",
            "pass":"1"
        },
        
    "4": {
            "text":"Новогодние мерцающие огоньки - это ...",
            "1": "Звёзды",
            "2": "Мишура",
            "3": "Гирлянды",
            "pass":"3"
        },
            
    "5": {
        "text":"Что добавит новогоднее настроение ?",
        "1": "Ромашки",
        "2": "Музыка",
        "3": "Отпуск",
        "pass":"2"
    },       
}

// задание первого вопроса
$("#quastion-title").text("Вопрос № "+(currentQuastion+1));//номер вопроса
$("#quastion-text") .text(qustions[currentQuastion].text);//текст вопроса
$("label").each(function(index){//варианты ответов
        $(this).html("<input type='radio' name='answer-select' id='"+(index+1)+"q'>"+qustions[0][index+1]);
});
$("#sound-bar").hide('fast');

setTimeout(function(){ // таймер по закрытию вводного экрана 4,5 секунд
    $("#introduce").hide('slow');
},4500);


function nextQustion(){ //функция по записи слеющего вопроса
    currentQuastion++; // увеличить счётчик текущего вопроса
    
    if(currentQuastion > 5) { //если последний вопрос был отгадан
        swal("Викторина пройдена","Вы почуствовали новогоднее настроение !","success");

        // поставить завершающие подписи 
        $("#quastion-title").text("Викторина пройдена");
        $("#quastion-text") .text("Счастливого нового года !");
        $("label").each(function(index){
            $(this).html("Ура");
        });
        $("#next").hide('slow'); //скрыть кнопку   
        $("#snow-window").show("slow"); // показать снегопад
    }
    else{//отобразить следующий вопрос
        $("#quastion-title").text("Вопрос № "+(currentQuastion+1));//номер вопроса
        $("#quastion-text") .text(qustions[currentQuastion].text);//текст вопроса
        $("label").each(function(index){ //варианты ответов
            $(this).html("<input type='radio' name='answer-select' id='"+(index+1)+"q'>"+qustions[currentQuastion][index+1]);
        });    
    }
}

$("#next").click(click_next);//привязка к кнопке функции по открытию следующего вопроса
function click_next(){
   
    if(document.getElementById(''+qustions[currentQuastion].pass+'q').checked){
        //если номер выбранного ответа соотвествует номеру правильного ответа 

        showItem(currentQuastion);//показать элемент комнаты
        swal(qustions[currentQuastion][qustions[currentQuastion].pass]+"!", "Правильный ответ" , "success");//сообщить о правильности ответа
        nextQustion(); // заполнить новым вопросом поля
    }
    else
    {   //сообщить о неправильности ответа
        swal("Неправильный ответ","Выберете правильный ответ","error");
    }
}

function showItem(numberOfItem){ 
    // функция по отображению элемента зала, по номеру текущего вопроса
    switch(numberOfItem){
        
        case 0:
            $('#yolka').show('slow');
            break;
        
         case 1:
            $('#stol').show('slow');
            break;

        case 2:
            $('#friends').show('slow');
            break;
        
        case 3:
            $('#gifts').show('slow');
            break;

        case 4:
            $('#girliandi').show('slow');
            break;

        case 5:
            $('#sound-bar').show('slow');
            break;

    }
}


