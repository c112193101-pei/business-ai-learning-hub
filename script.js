const searchInput = document.querySelector("#searchInput");
const cards = [...document.querySelectorAll(".article-card")];
const topicButtons = [...document.querySelectorAll(".topic-card")];
const clearFilter = document.querySelector("#clearFilter");
const resultsNote = document.querySelector("#resultsNote");
const emptyState = document.querySelector("#emptyState");
let activeCategory = "";

function updateArticles() {
  const keyword = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const text = `${card.dataset.search} ${card.innerText}`.toLocaleLowerCase();
    const matchesKeyword = text.includes(keyword);
    const matchesCategory = !activeCategory || card.dataset.category === activeCategory;
    const visible = matchesKeyword && matchesCategory;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
  resultsNote.textContent = activeCategory
    ? `目前分類：${activeCategory}（${visibleCount} 篇文章）`
    : keyword ? `搜尋「${searchInput.value.trim()}」：找到 ${visibleCount} 篇文章` : "精選入門內容，從基礎開始累積。";
  topicButtons.forEach(button => button.classList.toggle("selected", button.dataset.category === activeCategory));
}

searchInput.addEventListener("input", updateArticles);
topicButtons.forEach(button => button.addEventListener("click", () => {
  activeCategory = activeCategory === button.dataset.category ? "" : button.dataset.category;
  document.querySelector("#articles").scrollIntoView({ behavior: "smooth" });
  updateArticles();
}));
clearFilter.addEventListener("click", () => {
  activeCategory = "";
  searchInput.value = "";
  updateArticles();
});
