const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        articles.forEach(function (article) {
article.classList.remove('active');
        })
        const activeTab = document.getElementById(`${id}`);
        activeTab.classList.add('active');
    }

});


let now = new Date();
console.log(now.getFullYear());

let present = new Date('Aug 31 2020');
let past = new Date('Aug 31 2019');
let days  = present - past;
console.log(days);

const date = new Date();
const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
console.log(formattedDate)