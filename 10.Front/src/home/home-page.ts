

export class HomePage extends HTMLElement {
 static 
  
    constructor() {
    super()
    this.attachShadow({ mode: "open" })

    this.render()
  }

  private render() {
    this.shadowRoot!.innerHTML = `
      <main>
        <h1>Home</h1>

        <app-counter counterId="1"></app-counter>
        <app-counter counterId="2"></app-counter>
        <app-counter counterId="3"></app-counter>
      </main>

      <app-footer></app-footer>
    `
  }
}

#set

customElements.define("home-page", HomePage)
