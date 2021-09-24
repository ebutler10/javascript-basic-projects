//using selectors inside the element nice because you can select specific btn

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    btn.addEventListener('click', function(){
        // removes previous text when new button is clicked
        questions.forEach(function(item){
            if(item !== question) {
                item.classList.remove('show-text');
            };
        });
//finishes just having the btn open and close the text

        question.classList.toggle('show-text');
    });
});




// traversing the dom 2nd way to do same thing

//const btns = document.querySelectorAll('.question-btn');

//btns.forEach(function(btn){
    //btn.addEventListener('click', function(e){
        //const question = e.currentTarget.parentElement.parentElement;
       // question.classList.toggle('show-text');
   // });
//});