class Nav extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    this.className = "fixed z-10 md:sticky md:w-1/4 lg:w-1/5 2xl:w-1/6 top-[3.25rem] sm:top-[4.5rem] md:top-[5.5rem] -right-full md:left-0 transition-all mb-4";
    this.style.minHeight = "146px"
      this.innerHTML = `
        <ul class="w-52 bg-white md:w-full shadow-xl flex flex-col py-3 md:py-6 rounded-3xl md:rounded-none rounded-tr-none">
          <li class="gradient-bg" id="news-nav">
            <a href="/news.html" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              новости
            </a>
          </li>
          <li class="gradient-bg">
          <a href="#report" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              репортажи
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#interview" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              интервью
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#history" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              история
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#society" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              общество
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#politics" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              политика
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#opinion" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              мнение
            </a>
          </li>
          <li class="gradient-bg">
            <a href="#investigation" class="block 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              расследования
            </a>
          </li>
          <li class="bg-primary my-2 md:my-6 w-full h-px"></li>
          <li class="gradient-bg" id="about-nav">
            <a href="/about.html" class="block gradient-bg 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              о нас
            </a>
          </li>
          <li class="gradient-bg" id="contacts-nav">
            <a href="/contacts.html" class="block gradient-bg 2xl:pl-14 xl:pl-12 md:pl-2 pl-8 py-2 md:py-4">
              контакты
            </a>
          </li>
        </ul>
      `;
  }
}

customElements.define("nav-component", Nav);