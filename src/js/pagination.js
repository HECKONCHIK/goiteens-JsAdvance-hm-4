import newsApi from "./news-api";

const formRef = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const newsApiService = new newsApi();

let searchQuery = '';

function onSearchForm(event) {
    event.preventDefault();
    const form = event.currentTarget
    searchQuery = form.elements.searchForm.value

    fetchArticles(searchQuery);
}

function fetchArticles(query) {
    // fetch(`http://newsapi.org/v2/everything?q=${query}&language=en&pageSize=5&page=1&apikey=f58eaf87dd6248efaa19cf893b7b86fa`)
    //     .then(response => response.json())
    //     .then(data => data.articles)
    //     .then(articles=>console.log(articles))
}


function onLoadMoreClick() {
    fetchArticles(searchQuery);  
}