export {};

export namespace TextTools {
  export function toUpperCase(text: string): string {
    return text.toUpperCase();
  }
  export function reverse(text: string): string {
    return text.split("").reverse().join("");
  }
  export const constantText = "Das ist eine Konstante";
}

export default TextTools;
