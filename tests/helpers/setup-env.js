/**
 * Helper de entorno para pruebas en Node.js
 * Provee mocks de localStorage, document y window para probar módulos frontend.
 */

const storageMap = new Map();

export const mockLocalStorage = {
  getItem: (key) => storageMap.get(key) || null,
  setItem: (key, val) => storageMap.set(key, String(val)),
  removeItem: (key) => storageMap.delete(key),
  clear: () => storageMap.clear(),
  get _map() { return storageMap; }
};

globalThis.localStorage = mockLocalStorage;

if (!globalThis.window) {
  globalThis.window = globalThis;
}

export class MockElement {
  constructor(id = '', tagName = 'div') {
    this.id = id;
    this.tagName = tagName;
    this._innerHTML = '';
    this.classList = new Set();
    this.attributes = new Map();
    this.children = [];
  }

  set innerHTML(val) {
    this._innerHTML = String(val);
  }

  get innerHTML() {
    return this._innerHTML;
  }

  querySelector(selector) {
    // Comprobación rápida para IDs o clases comunes
    return null;
  }

  querySelectorAll(selector) {
    return [];
  }

  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() { return true; }
  setAttribute(k, v) { this.attributes.set(k, String(v)); }
  getAttribute(k) { return this.attributes.get(k) || null; }
  removeAttribute(k) { this.attributes.delete(k); }
  appendChild(child) { this.children.push(child); return child; }
}

const elementCache = new Map();

if (!globalThis.document) {
  globalThis.document = {
    getElementById: (id) => {
      if (!elementCache.has(id)) {
        elementCache.set(id, new MockElement(id));
      }
      return elementCache.get(id);
    },
    createElement: (tag) => new MockElement('', tag),
    body: new MockElement('body', 'body'),
    activeElement: null,
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {},
  };
}
