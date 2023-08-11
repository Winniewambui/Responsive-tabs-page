const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

buttons.forEach(btn =>{
    btn.addEventListener('click', function(e){
        e.preventDefault();

       
        buttons.forEach(btn =>{
            btn.classList.remove('active');
        })
        articles.forEach(article =>{
            article.classList.remove('active');
        })

        const val = e.target.dataset.id;
        const element = document.getElementById(val);
         if(element){
            btn.classList.add('active');
            element.classList.add('active');
         }

    })
})

