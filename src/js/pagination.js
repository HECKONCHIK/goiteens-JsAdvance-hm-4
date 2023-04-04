import NewsApi from "./news-api";

const formRef = document.querySelector('.js-search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const newsApiService = new NewsApi();

function onSearchForm(event) {
    event.preventDefault();
    const form = event.currentTarget

    newsApiService.searchQuery = form.elements.query.value

    newsApiService.fetchArticles()

}

function onLoadMoreClick() {
    newsApiService.increasePage()
    newsApiService.fetchArticles();  
}