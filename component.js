import { html, css, define } from "./framework/utils";
import Component from "./framework/base";

// This is the definition of <my-component>
class MyComponent extends Component {

  // This is the component's "internal" markup.
  // It will be rendered into the light dom.
  // this.childNodes will be slotted into the <slot> elements.
  static template = html`
    <div class="card">
      <slot name="image"></slot>
      <div class="wrapper">
        <slot name="title"></slot>
        <div class="body">
          <slot></slot>
          <div class="footer">
            <slot name="footer"></slot>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.5 36.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L387.9 239H12c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h375.9L209.4 451.5c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l211.1-211.1c4.7-4.7 4.7-12.3 0-17L233.4 36.5c-4.7-4.7-12.3-4.7-17 0z"/></svg>
          </div>
        </div>
      </div>
    </div>
  `;

  // This is the component's "internal" stylesheet.
  // It will be wrapped in @scope with an upper and lower bound
  // It will be attached to the main document
  // :scope refers to the element identified as the "upper" bound.
  // In this case, this.parentElement
  static styles = css`
    :scope {
      display: grid;
      outline: 2px solid #aaa;

      &:after {
        content: '';
        pointer-events: none;
        aspect-ratio: 3/4;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
      }
    }

    .card {
      background:#ededed;
      max-width: 25rem;
      cursor: pointer;
      position: relative;
      z-index: 0;
      grid-row: 1 / -1;
      grid-column: 1 / -1;

      &:hover {
        background: #ccc;
      }
    }

    .wrapper {
      padding: 0 1rem;
    }

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 7/5;
      object-fit: cover;
      margin-bottom: 0.5rem;
    }

    [slot="title"] {
      margin-block: 0 0.75rem;
    }

    .footer {
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      align-items: flex-start;
    }

    .arrow-icon {
      width: 1rem;
      height: 1rem;
      margin-top: 0.25rem;
    }

    :is(a, button)[slot="footer"]:after {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
    }
  `;
}

// This function is called to register <my-element> with the browser.
define('my-component', MyComponent);
