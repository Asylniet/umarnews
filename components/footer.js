class Footer extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
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
              <div>новости</div>
              <div>интервью</div>
              <div>расследования</div>
            </div>
          </div>
          <ul 
            class="text-xs sm:text-sm md:text-base gap-4"
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"
          >
            <li>
              о нас
            </li>
            <li>
              контакты
            </li>
            <li>
              новости
            </li>
            <li>
              репортажи
            </li>
            <li>
              интервью
            </li>
            <li>
              история
            </li>
            <li>
              общество
            </li>
            <li>
              политика
            </li>
            <li>
              мнение
            </li>
            <li>
              расследования
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/4 mt-10 lg:mt-0 flex justify-between items-start flex-wrap lg:block gap-4">
          <div class="mb-2 sm:mb-6">
            <a class="text-xl font-bold block lg:text-right" href="tel:+77058712335">+7 (705) 871 23 35</a>
            <a class="text-md font-bold block lg:text-right" href="mailto:umarovnews.kz@gmail.com">umarovnews.kz@gmail.com</a>
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
      <span class="text-xs sm:text-sm md:text-base mt-4 sm:mt-8 md:mt-10">Полное или частичное копирование материалов сайта в коммерческих целях допускается только с письменного разрешения владельца сайта.</span>
      <span class="text-xs sm:text-sm md:text-base mt-2 sm:mt-4 md:mt-6">©umarovnews2023</span>
    </div>
  </footer>
      `;
  }
}

customElements.define("footer-component", Footer);