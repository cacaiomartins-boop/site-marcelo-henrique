/// <reference types="vite/client" />
declare global {
  interface Window {
    __motionTimer?: number;
    __lenis?: import("lenis").default;
  }
}
export {};
