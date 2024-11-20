const html = (strings, ...args) => {
  const template = document.createElement('template');
  template.innerHTML = strings.join('');
  return template;
}

const css = (strings, ...args) => {
  return strings.join('');
}

const define = (tagName, clazz) => {
  if (clazz.styles) {
    const sheet = new CSSStyleSheet();
    const scoped = `
      @scope (${tagName}) to (slot > * > *) {
        ${clazz.styles}
      }
    `;
    sheet.replaceSync(scoped);
    document.adoptedStyleSheets.push(sheet);
  }
  customElements.define(tagName, clazz);
}

export {html, css, define}
