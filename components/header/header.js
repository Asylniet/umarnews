class Header extends HTMLElement {
  constructor() {
      super();
  }

  languageMap = {
    ru : {
      news: "новости",
      interview: "интервью",
      investigation: "расследования",
      searchPlaceholder: "День столицы...",
      flag: "kz",
      language: "Қазақша",
    },
    kz : {
      news: "жаңалықтар",
      interview: "сұхбат",
      investigation: "тергеу",
      searchPlaceholder: "Астана күні...",
      flag: "ru",
      language: "Русский",
    },
  }

  connectedCallback() {
    const link = this.getAttribute("link");
    const language = document.querySelector('html').getAttribute("lang");
    const map = this.languageMap[language];
      this.innerHTML = `
      <header class="fixed top-0 left-0 z-20 w-full p-2 bg-primary mb-20 sm:mb-0">
        <div class="wrapper flex items-center justify-between relative">
          <a href="/${language}/index.html" class="logo w-32 sm:w-1/4 lg:w-1/5 2xl:w-1/6 flex 2xl:pl-8 xl:pl-6" style="min-width: 146px;">
            <img class="max-w-full" src="/assets/images/logo.png" alt="Umarovnews">
          </a>
          <div class="md:w-3/4 lg:w-4/5 2xl:w-5/6 flex items-center justify-end sm:justify-between px-2 md:px-4 left-1 gap-2">
            <div class="hidden sm:block text-xs md:text-base font-secondary font-bold">
              <a href="/${language}/news.html" class="block hover:underline">${map.news}</a>
              <a href="#" class="block hover:underline">${map.interview}</a>
              <a href="#" class="block hover:underline">${map.investigation}</a>
            </div>
            <div class="-z-[1] sm:z-1 sm:static absolute left-0 -top-16 w-full sm:w-3/5 transition-all" id="search">
              <div class="relative flex items-center gap-4 rounded-full bg-white py-1 px-4 h-14 border sm:border-none">
                <img class="h-6 aspect-square" src="/assets/icons/search.svg" alt="search">
                <input class="w-full focus:border-none focus:outline-none" type="text" placeholder="${map.searchPlaceholder}">
              </div>
            </div>
            <a href="${link}" class="button link flex items-center gap-2">
              <img style="width: 2rem" src="/assets/images/${map.flag}_flag.jpg" alt="language">
              <span class="hidden md:inline">${map.language}</span>
            </a>
            <div class="flex md:hidden hamburger">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      `;
  }
}

customElements.define("header-component", Header);