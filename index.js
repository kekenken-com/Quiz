const question = '日本の首都は？';
const answers = [
    '京都',
    '愛知',
    '福岡',
    '東京'
];
const correct = '東京';
const $button = document.getElementsByClassName('button');
const buttonLength =$button.length;


const setupQuiz = function(){
document.getElementById('js-question').textContent = question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex]
    buttonIndex++;
};
};
setupQuiz();


const eventHandler = function(e){
    if(correct === e.target.textContent){
        alert('正解');
    } else {
        alert('不正解');
    }
};


let eventIndex = 0;
while(eventIndex < buttonLength){
    $button[eventIndex].addEventListener('click', function(e){
    eventHandler(e);
    });
    eventIndex++;
};












// const $button = document.getElementsByTagName('button');



// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];

// const setupQuiz = function () {
//     document.getElementById('js-question').textContent = question;
//     let buttonIndex = 0;
//     let buttonLength = $button.length;
//     while (buttonIndex < buttonLength) {
//         $button[buttonIndex].textContent = answers[buttonIndex];
//         buttonIndex++;
//     }
// };
// setupQuiz();

// const eventHandler = function (e) {
//     if (correct === e.target.textContent) {
//         window.alert('correct');
//     } else {
//         window.alert('wrong');
//     }
// };

// let handleIndex = 0;
// const buttonLength = $button.length
// while(handleIndex < buttonLength){
//     $button[handleIndex].addEventListener('click', function (e) {
//         eventHandler(e);
//     });
//     handleIndex++;
// };
