import NewsApi from "./news-api";
import paginationTpl from "../tamplates/pagination.hbs";

const formRef = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const input = document.querySelector('.form-control');
const search = document.querySelector('.btn.btn-primary.mb-2');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);
input.addEventListener('input', disabledButton);

const newsApiService = new NewsApi();

function disabledButton() {
    if (input.value.length > 0) {
        search.disabled = false;
    }
}

function onSearchForm(event) {
    event.preventDefault();
    const form = event.currentTarget;

    articlesContainer.innerHTML = '';

    newsApiService.resetPage();

    newsApiService.searchQuery = form.elements.query.value


    newsApiService.fetchArticles()

    .then(creatMarkup)
    
    input.value = '';
}

function onLoadMoreClick() {
    newsApiService.increasePage();
    console.log(newsApiService);
    newsApiService.fetchArticles()
    
        .then(creatMarkup)
        .catch(
            alert("Запит невірний(( Спробуйте ще раз!")
        )
}

function creatMarkup(articles) {
    const markup = paginationTpl(articles);
    articlesContainer.insertAdjacentHTML('beforeend', markup);
    
}






