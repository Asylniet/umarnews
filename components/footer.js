class Footer extends HTMLElement {
  constructor() {
      super();
  }

  languageMap = {
    ru : {
      news: "новости",
      interview: "интервью",
      investigation: "расследования",
      history: "история",
      report: "репортаж",
      society: "общество",
      politics: "политика",
      opinion: "мнение",
      about: "о нас",
      contacts: "контакты",
      text: "Полное или частичное копирование материалов сайта в коммерческих целях допускается только с письменного разрешения владельца сайта.",
    },
    kz : {
      news: "жаңалықтар",
      interview: "сұхбат",
      investigation: "тергеу",
      history: "тарих",
      report: "есеп беру",
      society: "қоғам",
      politics: "саясат",
      opinion: "пікір",
      about: "біз туралы",
      contacts: "байланыс",
      text: "Коммерциялық мақсатта сайт материалдарын толық немесе ішінара көшіруге Сайт иесінің жазбаша рұқсатымен ғана жол беріледі.",
    },
  }

  connectedCallback() {
    const language = document.querySelector('html').getAttribute("lang");
    const map = this.languageMap[language];
      this.innerHTML = `
      <footer class="bg-[#287FAF] w-full text-white p-6">
    <div class="flex flex-col wrapper">
      <div class="flex flex-col lg:flex-row justify-between items-start">
        <div class="w-full lg:w-3/4">
          <div class="flex items-center w-full mb-6">
            <div class="logo mr-4 sm:mr-10 sm:w-32 md:w-1/3" style="min-width: 146px;">
              <img class="max-w-full object-contain" src="/assets/images/logo-white.png" alt="Umarovnews">
            </div>
            <div class="text-xs md:text-base font-secondary">
              <a href="/${language}/news.html" class="block hover:underline">${map.news}</a>
              <a href="#" class="block hover:underline">${map.interview}</a>
              <a href="#" class="block hover:underline">${map.investigation}</a>
            </div>
          </div>
          <ul 
            class="text-xs sm:text-sm md:text-base gap-4"
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"
          >
            <li>
              <a class="hover:underline" href="/${language}/about.html">
              ${map.about}
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/${language}/contacts.html">
              ${map.contacts}
              </a>
            </li>
            <li>
              <a class="hover:underline" href="/${language}/news.html">
              ${map.news}
              </a>
            </li>
            <li>
            ${map.report}
            </li>
            <li>
            ${map.interview}
            </li>
            <li>
            ${map.history}
            </li>
            <li>
            ${map.society}
            </li>
            <li>
            ${map.politics}
            </li>
            <li>
            ${map.opinion}
            </li>
            <li>
            ${map.investigation}
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/4 mt-10 lg:mt-0 flex justify-between items-start flex-wrap lg:block gap-4">
          <div class="mb-2 sm:mb-6">
            <a class="text-xl font-bold block lg:text-right hover:underline" href="tel:+77058712335">+7 (705) 871 23 35</a>
            <a class="text-md font-bold block lg:text-right hover:underline" href="mailto:umarovnews.kz@gmail.com">umarovnews.kz@gmail.com</a>
          </div>
          <div class="w-full flex justify-end gap-6">
            <a href="#" class="bg-white w-8 sm:w-11 aspect-square rounded-lg">
              <img src="/assets/icons/telegram.svg" alt="Telegram ссылка">
            </a>
            <a href="#" class="bg-white w-8 sm:w-11 aspect-square rounded-lg">
              <img src="/assets/icons/whatsapp.svg" alt="Whatsapp ссылка">
            </a>
          </div>
        </div>
      </div>
      <span class="text-xs sm:text-sm md:text-base mt-4 sm:mt-8 md:mt-10">${map.text}</span>
      <span class="text-xs sm:text-sm md:text-base mt-2 sm:mt-4 md:mt-6">©umarovnews2023</span>
    </div>
  </footer>
      `;
  }
}

customElements.define("footer-component", Footer);