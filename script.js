const grid = document.getElementById("businessGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const countryFilter = document.getElementById("countryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const categories = [...new Set(businesses.map(item => item.category))].sort();
const countries = [...new Set(businesses.map(item => item.country))].sort();
categories.forEach(value => categoryFilter.add(new Option(value, value)));
countries.forEach(value => countryFilter.add(new Option(value, value)));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}
function safeUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch { return "#"; }
}
function renderBusinesses() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const country = countryFilter.value;
  const matches = businesses.filter(item => {
    const haystack = [item.name, item.category, item.country, item.type, item.description].join(" ").toLowerCase();
    return haystack.includes(term) && (!category || item.category === category) && (!country || item.country === country);
  });
  grid.innerHTML = matches.map(item => `
    <article class="business-card">
      <div class="card-top"><span class="card-symbol">${escapeHtml(item.symbol)}</span><span class="card-type">${escapeHtml(item.type)}</span></div>
      <h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p>
      <div class="card-bottom"><span>${escapeHtml(item.category)} · ${escapeHtml(item.country)}</span><a href="${safeUrl(item.url)}" target="_blank" rel="noopener noreferrer">Visit shop ↗</a></div>
    </article>`).join("");
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "business" : "businesses"} found`;
  emptyState.hidden = matches.length > 0;
}
[searchInput, categoryFilter, countryFilter].forEach(el => el.addEventListener("input", renderBusinesses));

document.getElementById("categoryLinks").innerHTML = categories.map(category =>
  `<button class="category-link" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)} <span>↗</span></button>`
).join("");
document.getElementById("categoryLinks").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  categoryFilter.value = button.dataset.category;
  renderBusinesses();
  document.getElementById("discover").scrollIntoView({behavior:"smooth"});
});
document.getElementById("year").textContent = new Date().getFullYear();
renderBusinesses();
