const grid = document.getElementById("businessGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const alphabetIndex = document.getElementById("alphabetIndex");
let selectedLetter = "all";

const filterGroups = {
  categories: { element: document.getElementById("categoryOptions"), values: [...new Set(businesses.flatMap(item => item.categories))].sort() },
  countries: { element: document.getElementById("countryOptions"), values: [...new Set(businesses.map(item => item.country))].sort() }
};
const selected = { categories: new Set(), countries: new Set() };

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
function renderFilterOptions() {
  for (const [groupName, group] of Object.entries(filterGroups)) {
    const allOption = groupName === "countries" ? `
      <label class="filter-option" for="all-countries">
        <input id="all-countries" type="checkbox" data-group="countries" data-all="true" checked>
        <span>All countries</span>
      </label>` : "";
    group.element.innerHTML = allOption + group.values.map((value, index) => {
      const id = `${groupName}-${index}`;
      return `<label class="filter-option" for="${id}">
        <input id="${id}" type="checkbox" data-group="${groupName}" value="${escapeHtml(value)}">
        <span>${escapeHtml(value)}</span>
      </label>`;
    }).join("");
  }
}
function updateFilterSummary() {
  const total = Object.values(selected).reduce((sum, set) => sum + set.size, 0);
  document.getElementById("activeFilterCount").textContent = total ? `${total} filter${total === 1 ? "" : "s"} selected` : "No filters selected";
}
function updateAlphabetIndex() {
  const availableLetters = new Set(
    businesses.map(item => item.symbol.toUpperCase())
  );

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  alphabetIndex.innerHTML = `
    <button
      type="button"
      class="letter-button ${selectedLetter === "all" ? "active" : ""}"
      data-letter="all"
      aria-pressed="${selectedLetter === "all"}"
    >All</button>
    ${letters.map(letter => `
      <button
        type="button"
        class="letter-button ${selectedLetter === letter ? "active" : ""}"
        data-letter="${letter}"
        aria-pressed="${selectedLetter === letter}"
        ${availableLetters.has(letter) ? "" : "disabled"}
      >${letter}</button>
    `).join("")}
  `;
}

alphabetIndex.addEventListener("click", event => {
  const button = event.target.closest("[data-letter]");
  if (!button || button.disabled) return;

  selectedLetter = button.dataset.letter;
  renderBusinesses();
});
function renderBusinesses() {
  const term = searchInput.value.trim().toLowerCase();

  const matches = businesses.filter(item => {
    const haystack = [item.name, item.categories.join(" "), item.country, item.description].join(" ").toLowerCase();

    const matchesSearch = haystack.includes(term);
    const matchesCategory = !selected.categories.size || item.categories.some(value => selected.categories.has(value));
    const matchesCountry = !selected.countries.size || selected.countries.has(item.country);
    const matchesLetter = selectedLetter === "all" || item.symbol.toUpperCase() === selectedLetter;

    return matchesSearch && matchesCategory && matchesCountry && matchesLetter;
  });

  grid.innerHTML = matches.map(item => `
    <article class="business-card">
      <div class="card-top"><span class="card-symbol">${escapeHtml(item.symbol)}</span></div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="card-tags">${item.categories.map(category => `<span>${escapeHtml(category)}</span>`).join("")}</div>
      <div class="card-bottom"><span>${escapeHtml(item.country)}</span><a href="${safeUrl(item.url)}" target="_blank" rel="noopener noreferrer">Visit shop ↗</a></div>
    </article>`).join("");

  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "business" : "businesses"} found`;
  emptyState.hidden = matches.length > 0;
  updateFilterSummary();
  updateAlphabetIndex();
}
Object.entries(filterGroups).forEach(([groupName, group]) => {
  group.element.addEventListener("change", event => {
    const input = event.target;
    if (input.matches('input[type="checkbox"]')) {
      if (groupName === "countries" && input.dataset.all === "true") {
        if (input.checked) {
          selected.countries.clear();
          group.element.querySelectorAll('input[data-all="false"], input:not([data-all])').forEach(option => { option.checked = false; });
        } else if (!selected.countries.size) {
          input.checked = true;
        }
      } else {
        if (input.checked) selected[groupName].add(input.value);
        else selected[groupName].delete(input.value);
        if (groupName === "countries") {
          const allCheckbox = group.element.querySelector('[data-all="true"]');
          if (allCheckbox) allCheckbox.checked = selected.countries.size === 0;
        }
      }
      renderBusinesses();
    }
  });
});
searchInput.addEventListener("input", renderBusinesses);
document.getElementById("clearFilters").addEventListener("click", () => {
  Object.values(selected).forEach(set => set.clear());
  document.querySelectorAll(".filter-option input").forEach(input => { input.checked = input.dataset.all === "true"; });
  searchInput.value = "";
  renderBusinesses();
});
document.getElementById("year").textContent = new Date().getFullYear();
renderFilterOptions();
renderBusinesses();


/* Business listing application form */
const submissionForm = document.getElementById("businessSubmissionForm");

if (submissionForm) {
  const formStatus = document.getElementById("formStatus");
  const submitButton = submissionForm.querySelector('button[type="submit"]');
  const submissionFrame = document.querySelector('iframe[name="submissionTarget"]');
  let submissionInProgress = false;

  if (submissionFrame) {
    submissionFrame.addEventListener("load", () => {
      if (!submissionInProgress) return;

      submissionInProgress = false;
      submissionForm.reset();
      submitButton.disabled = false;
      submitButton.innerHTML = 'Submit application <span aria-hidden="true">→</span>';
      formStatus.textContent = "Your application has been sent. Thank you! We'll review it before adding your business to the directory.";
      formStatus.className = "form-status form-status-success";
      formStatus.hidden = false;
    });
  }

  submissionForm.addEventListener("submit", event => {
    if (!submissionForm.reportValidity()) {
      event.preventDefault();
      return;
    }

    const shopLink = submissionForm.elements.shopLink.value.trim();
    let parsedShopLink;

    try {
      parsedShopLink = new URL(shopLink);
    } catch {
      event.preventDefault();
      submissionForm.elements.shopLink.setCustomValidity("Please enter a valid shop link, including https://");
      submissionForm.elements.shopLink.reportValidity();
      submissionForm.elements.shopLink.setCustomValidity("");
      return;
    }

    if (!["https:", "http:"].includes(parsedShopLink.protocol)) {
      event.preventDefault();
      submissionForm.elements.shopLink.setCustomValidity("Please use a shop link beginning with https:// or http://");
      submissionForm.elements.shopLink.reportValidity();
      submissionForm.elements.shopLink.setCustomValidity("");
      return;
    }

    if (submissionInProgress) {
      event.preventDefault();
      return;
    }

    submissionInProgress = true;
    submitButton.disabled = true;
    submitButton.textContent = "Sending application…";
    formStatus.hidden = true;
  });
}
