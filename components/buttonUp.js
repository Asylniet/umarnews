class ButtonUp extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.className = "fixed bottom-2 right-2 md:bottom-4 md:right-4 rounded-full group cursor-pointer transparent-click z-10";
      this.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          left: 0,
        })
      });
      this.innerHTML = `
      <svg class="w-10 h-10 md:w-12 md:h-12" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle class="group-hover:fill-[#FFE600] group-active:fill-[#69B6E0]" cx="20" cy="20" r="20" fill="#FFF386"/>
        <path d="M19 30C19 30.5523 19.4477 31 20 31C20.5523 31 21 30.5523 21 30L19 30ZM20.7071 9.29289C20.3166 8.90237 19.6834 8.90237 19.2929 9.29289L12.9289 15.6569C12.5384 16.0474 12.5384 16.6805 12.9289 17.0711C13.3195 17.4616 13.9526 17.4616 14.3431 17.0711L20 11.4142L25.6569 17.0711C26.0474 17.4616 26.6805 17.4616 27.0711 17.0711C27.4616 16.6805 27.4616 16.0474 27.0711 15.6569L20.7071 9.29289ZM21 30L21 10L19 10L19 30L21 30Z" fill="#0D0D0D"/>
      </svg>
      `;
  }
}

customElements.define("button-up-component", ButtonUp);