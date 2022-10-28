import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";


export class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
      class: { type: String}
    };
  }
  static get styles() {
    return css`
      a {
        margin: 5px;
      }
    `;
  }
  constructor() {
    super();
    this.href = "";
    this.class = "";
  }
  render() {
    
    return html`
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	
      <a class="${this.class}" href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);

  }
}

customElements.define("app-link", Link);
