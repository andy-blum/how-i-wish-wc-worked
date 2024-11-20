export default class ComponentBase extends HTMLElement {
  connectedCallback() {
    if (this.constructor.template instanceof HTMLTemplateElement) {
      const template = this.constructor.template.cloneNode(true).content;

      template.querySelectorAll('slot')
        .forEach(slot => {
          if (slot.getAttribute('name')) {
            const slotSelector = `[slot=${slot.getAttribute('name')}]`;
            slot.append(...Array.from(this.querySelectorAll(slotSelector)))
          } else {
            const remainder = Array.from(this.childNodes).filter(node => (node.nodeType === node.TEXT_NODE || !node.getAttribute('slot')));
            slot.append(...remainder)
          }
        });

      // Put the content into the DOM.
      this.replaceChildren(template);
    }
  }
}
