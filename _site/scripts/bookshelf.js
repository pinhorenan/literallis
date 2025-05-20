/* /scripts/bookshelf.js */

document.addEventListener("DOMContentLoaded", () => {
  const grid   = document.getElementById("bookshelfGrid");
  const filter = document.getElementById("filter");
  const sort   = document.getElementById("sort");

  function matches(book, query){
    const q = query.toLowerCase();
    return book.dataset.title.includes(q) || book.dataset.author.includes(q);
  }

  function apply(){
    const query = filter.value.trim();
    const cards = [...grid.children];

    cards.forEach(card => {
      card.classList.toggle("hidden", query && !matches(card, query));
    });

    const key = sort.value;
    cards.sort((a,b) => {
      return a.dataset[key].localeCompare(b.dataset[key], "pt-BR", {numeric:true});
    }).forEach(card => grid.appendChild(card));
  }

  filter.addEventListener("input", apply);
  sort  .addEventListener("change", apply);
});
