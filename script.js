const searchInput=document.querySelector("#searchInput");
const cards=[...document.querySelectorAll(".article-card")];
const topics=[...document.querySelectorAll(".topic-card")];
const clearButton=document.querySelector("#clearFilter");
const note=document.querySelector("#resultsNote");
const empty=document.querySelector("#emptyState");
let activeCategory="";
function update(){
 const keyword=searchInput.value.trim().toLowerCase();let count=0;
 cards.forEach(card=>{
  const text=(card.dataset.search+" "+card.innerText).toLowerCase();
  const show=text.includes(keyword)&&(!activeCategory||card.dataset.category===activeCategory);
  card.hidden=!show;if(show)count++;
 });
 empty.hidden=count!==0;
 note.textContent=activeCategory?`目前分類：${activeCategory}（${count} 篇文章）`:keyword?`搜尋「${searchInput.value.trim()}」：找到 ${count} 篇文章`:"精選入門內容，從基礎開始累積。";
 topics.forEach(t=>t.classList.toggle("selected",t.dataset.category===activeCategory));
}
searchInput.addEventListener("input",update);
topics.forEach(t=>t.addEventListener("click",()=>{activeCategory=activeCategory===t.dataset.category?"":t.dataset.category;document.querySelector("#articles").scrollIntoView({behavior:"smooth"});update();}));
clearButton.addEventListener("click",()=>{activeCategory="";searchInput.value="";update();});
