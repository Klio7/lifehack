import "@testing-library/jest-dom";

if (typeof global.structuredClone === "undefined") {
  global.structuredClone = (obj: unknown): unknown => JSON.parse(JSON.stringify(obj)) as unknown;
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
