class Nav extends HTMLElement {
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
    },
  }

  connectedCallback() {
    const language = document.querySelector('html').getAttribute("lang");
    const map = this.languageMap[language];
    this.className = "fixed md:z-10 z-20 md:sticky md:w-1/4 lg:w-1/5 2xl:w-1/6 top-[3.25rem] sm:top-[4.5rem] md:top-[5.5rem] -right-full md:left-0 transition-all mb-4";
    this.style.minHeight = "146px"
      this.innerHTML = `
        <ul class="w-52 bg-white md:w-full shadow-xl flex flex-col py-3 md:py-6 rounded-3xl md:rounded-none rounded-tr-none">
          <li class="gradient-bg" id="news-nav">
            <a href="/${language}/news.html" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              ${map.news}
            </a>
          </li>
          <li class="gradient-bg">
          <a href="#report" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
          ${map.report}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#interview" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.interview}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#history" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.history}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#society" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.society}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#politics" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.politics}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#opinion" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.opinion}
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#investigation" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.investigation}
            </a>
          </li>
          <li class="bg-primary my-2 md:my-6 w-full h-px"></li>
          <li class="gradient-bg" id="about-nav">
            <a href="/${language}/about.html" class="block gradient-bg 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.about}
            </a>
          </li>
          <li class="gradient-bg" id="contacts-nav">
            <a href="/${language}/contacts.html" class="block gradient-bg 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
            ${map.contacts}
            </a>
          </li>
        </ul>
      `;
  }
}

customElements.define("nav-component", Nav);