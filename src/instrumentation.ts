export async function register() {
  // Polyfill localStorage and sessionStorage on the server.
  // The IDE injects --localstorage-file into Node with an invalid path,
  // creating a broken localStorage mock. We replace it with a safe no-op.
  if (typeof globalThis.localStorage === 'undefined' || typeof globalThis.localStorage.getItem !== 'function') {
    const noopStorage = {
      getItem: (_key: string) => null,
      setItem: (_key: string, _value: string) => {},
      removeItem: (_key: string) => {},
      clear: () => {},
      key: (_index: number) => null,
      length: 0,
    };
    (globalThis as any).localStorage = noopStorage;
    (globalThis as any).sessionStorage = noopStorage;
  }
}
