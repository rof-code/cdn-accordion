
const elements = document.querySelectorAll('.element');
elements.forEach(element =>{
    let question = element.querySelector('.question');
    let btn = element.querySelector('.question button');
    let icon = element.querySelector('.question button i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');
    var elBorder = document.querySelectorAll('.element');
    question.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fa fa-caret-right';
            }
        });
        answer.classList.toggle('hideText');
        icon.className === 'fa fa-caret-right' ? icon.className = 'fa fa-caret-down' 
        : icon.className ='fa fa-caret-right';
    });
});
