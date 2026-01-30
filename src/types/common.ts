export const WindowModes = {
    SLIDING: 'sliding',
    BLOCK: 'block'
}
export type WindowMode = keyof typeof WindowModes;
export type NGramFrequencyMap = Record<string, number>;