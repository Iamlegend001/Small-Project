const button = document.getElementById("getResource");
const resourceCard = document.getElementById("resource");
const articleCount = document.getElementById("articleCount");
const articleCategory = document.getElementById("articleCategory");
const readingTime = document.getElementById("readingTime");

let articlesRead = 0;

button.addEventListener("click", getBrainFood);

async function getBrainFood() {
  resourceCard.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg animate-pulse">
        <span class="text-sm text-gray-400">Category:</span>
        <span class="text-blue-400 font-medium">Loading...</span>
      </div>
      <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg animate-pulse">
        <span class="text-sm text-gray-400">Reading Time:</span>
        <span class="text-white font-medium">Calculating...</span>
      </div>
    </div>
    <div class="space-y-3">
      <div class="h-4 bg-dark-800/50 rounded animate-pulse"></div>
      <div class="h-4 bg-dark-800/50 rounded animate-pulse w-3/4"></div>
      <div class="h-4 bg-dark-800/50 rounded animate-pulse w-1/2"></div>
    </div>
  `;

  try {
    const res = await fetch("https://dev.to/api/articles?tag=javascript");
    const articles = await res.json();

    if (!articles.length) throw new Error("No articles found!");

    const randomArticle = articles[Math.floor(Math.random() * articles.length)];

    const { title, description, url, reading_time_minutes, tags } =
      randomArticle;

    // Update article count with animation
    articlesRead++;
    articleCount.textContent = articlesRead;
    articleCount.classList.add("animate-bounce");
    setTimeout(() => articleCount.classList.remove("animate-bounce"), 1000);

    // Calculate reading time
    const readingTimeText = reading_time_minutes
      ? `~${reading_time_minutes} min`
      : "~5 min";

    // Get main tag
    const mainTag = tags[0] || "JavaScript";

    resourceCard.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg">
          <span class="text-sm text-gray-400">Category:</span>
          <span class="text-blue-400 font-medium">${mainTag}</span>
        </div>
        <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg">
          <span class="text-sm text-gray-400">Reading Time:</span>
          <span class="text-white font-medium">${readingTimeText}</span>
        </div>
      </div>
      <h2 class="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">${title}</h2>
      <p class="text-gray-300 mb-4">${
        description || "No description provided."
      }</p>
      <a href="${url}" target="_blank" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition duration-300 group">
        <span>🔗 Read Full Article</span>
        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    `;
  } catch (error) {
    console.error(error);
    resourceCard.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg">
          <span class="text-sm text-gray-400">Category:</span>
          <span class="text-red-400 font-medium">Error</span>
        </div>
        <div class="flex items-center space-x-2 bg-dark-800/50 px-3 py-1 rounded-lg">
          <span class="text-sm text-gray-400">Status:</span>
          <span class="text-white font-medium">Failed</span>
        </div>
      </div>
      <div class="text-red-400 flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <span>Unable to fetch your brain food. Try again later.</span>
      </div>
    `;
  }
}
