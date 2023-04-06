import NewsApi from "./news-api";
import paginationTpl from "../tamplates/pagination.hbs";

const formRef = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const input = document.querySelector('.form-control');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const newsApiService = new NewsApi();

function onSearchForm(event) {
    event.preventDefault();
    const form = event.currentTarget;

    input.value = '';

    articlesContainer.innerHTML = '';

    newsApiService.resetPage();

    newsApiService.searchQuery = form.elements.query.value


    newsApiService.fetchArticles()

    .then(creatMarkup)

}

function onLoadMoreClick() {
    newsApiService.increasePage();
    console.log(newsApiService);
    newsApiService.fetchArticles()
    
    .then(creatMarkup)
}

function creatMarkup(articles) {
        const markup = paginationTpl(articles);
        articlesContainer.insertAdjacentHTML('beforeend', markup);
}