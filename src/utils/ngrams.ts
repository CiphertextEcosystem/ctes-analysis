import { WindowMode, WindowModes } from "../types";

/** Generate n-grams from an input text.
 * Options include the n-gram size (n) and how to collect the n-grams.
 * Sliding: slide across the input text. This causes n-grams to evaluate the same character in multiple n-grams: ABCD where n=2 results in [AB, BC, CD]
 * Block: text is broken into "blocks": ABCD where n=2 results in [AB, CD]
 */
export function generateNGrams(
    text: string,
    n: number,
    mode: WindowMode
): string[] {
    if (text.length === 0) return [];

    if (n <= 1) return text.split('');
    if (n > text.length) return [text];

    const result: string[] = [];

    if (mode === WindowModes.SLIDING) {
        for (let i = 0; i <= text.length - n; i++) {
            result.push(text.slice(i, i + n));
        }
    } else {
        for (let i = 0; i + n <= text.length; i += n) {
            result.push(text.slice(i, i + n));
        }
    }

    return result;
}