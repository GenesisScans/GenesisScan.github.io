
// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    loadManga();
});

function loadManga() {
    fetch('manga.json')
        .then(response => response.json())
        .then(data => {
            displayManga(data.latest, 'latest-manga');
            displayManga(data.hot, 'hot-manga');
            displayManga(data.newest, 'newest-manga');
        });
}

function displayManga(mangaList, elementId) {
    const container = document.getElementById(elementId);
    mangaList.forEach(manga => {
        const mangaDiv = document.createElement('div');
        mangaDiv.innerHTML = `
            <h3>${manga.title}</h3>
            <img src="${manga.cover}" alt="${manga.title}" width="150">
            <p>${manga.description}</p>
        `;
        container.appendChild(mangaDiv);
    });
}
