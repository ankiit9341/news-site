// const API_KEY = "040f40f84df74b8eb15b80237f947a55";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', ()=> fetchNews("india"));

// function reload(){
//     fetchNews("viral news");
// }

// async function fetchNews(query) {
//     // const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const res = await fetch('data.json');
//     const data = await res.json();
//     bindData(data.articles);
// }
//  function bindData(articles) {
//     const cardsContainer = document.getElementById('card-container');
//     const cardsTamplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = "";

//     articles.forEach(article => {
//         if(!article.urlToImage) return;
//         const cardClone = cardsTamplate.content.cloneNode(true);
//         fillDataInCard(cardClone,article);
//         cardsContainer.appendChild(cardClone);
//     });
    

//     function fillDataInCard(cardClone,article){
//         const newsImg = cardClone.querySelector('#news-img');
//         const newsTitle = cardClone.querySelector('#news-title');
//         const newsSrc = cardClone.querySelector('#news-src');
//         const newsDesc = cardClone.querySelector('#news-dis');

//         newsImg.src = article.urlToImage;
//         newsTitle.innerHTML = article.title;
//         newsDesc.innerHTML = article.description;

//         const date = new Date(article.publishedAt).toLocaleString('eg-US',{
//             timeZone: "Asia/Jakarta"
//         });
//         newsSrc.innerHTML = `${article.source.name} . ${date}`;

//         cardClone.firstElementChild.addEventListener("click", ()=>{
//             window.open(article.url,"_blank");
//         })
//     }
// }
// let currElement = null;
// function onclickNav(id){
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     currElement?.classList.remove("active");
//     currElement = navItem;
//     currElement.classList.add("active");
// }

// const searchBtn = document.getElementById('search-btn');
// const searchText = document.getElementById('search-text');

// searchBtn.addEventListener('click',()=>{
//     const query = searchText.value;
//     if(!query) return;
//     fetchNews(query);
//     currElement?.classList.remove("active");
//     currElement = null;
// })

const API_KEY = "040f40f84df74b8eb15b80237f947a55";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews('data.json'));

function reload(){
    fetchNews('data.json');
}


async function fetchNews(query) {
    // const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const res = await fetch(query);
    const data = await res.json();
    bindData(data);
}

function bindData(articles) {
    const cardsContainer = document.getElementById('card-container');
    const cardsTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = "";

    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = cardsTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSrc = cardClone.querySelector('#news-src');
    const newsDesc = cardClone.querySelector('#news-dis');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString('en-US', {
        timeZone: "Asia/Jakarta"
    });
    newsSrc.innerHTML = `${article.source.name} • ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let currElement = null;
function onclickNav(id) {
    console.log(id);
    fetchNews(`${id}`);
    const navItem = document.getElementById(id);
    currElement?.classList.remove("active");
    currElement = navItem;
    currElement.classList.add("active");
}

const searchBtn = document.getElementById('search-btn');
const searchText = document.getElementById('search-text');

searchBtn.addEventListener('click', () => {
    const query = searchText.value;
    // if (!query) return;
    // fetchNews(query);
    // currElement?.classList.remove("active");
    // currElement = null;
    document.body.style.innerHTML = `${query} can not be searched`
});
