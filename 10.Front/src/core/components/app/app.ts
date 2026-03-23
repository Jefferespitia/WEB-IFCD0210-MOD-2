import { Counter } from "../counter/counter2"
import { Footer } from "../footer-wc/footer"

export class AppComponent {
    static #selector = "app-root"
    static render() {
        const el = document.querySelector(AppComponent.#selector) as HTMLElement
        // En este caso No es necesaria una type guard
        // if (el === null) {
        //     throw new Error("Selector invalido")
        // }
    
        const newElement = new AppComponent()
        el.replaceWith(newElement.#element)
        Footer.render();
        Counter.render();
    }

    #template!: string;
    #element!: HTMLElement

    private constructor () {
        this.#setTemplate()
        this.#setElement()
       
    }

    #setTemplate() {
        this.#template = "<div>Prueba<div>"

    }


    #setElement() {
        this.#element =document.createElement("app-root")
        console.log(this.#element)
        this.#element.innerHTML = this.#template

    }
}



