import { Ciphertext } from "ctes-models-ts";
import { WindowMode, NGramFrequencyMap, WindowModes } from "./types";
import { generateNGrams } from "./utils/ngrams";
import { getNgramFrequencies } from "./utils";

export type FrequencyAnalysisOptions = {
    nGramSize: number;
    mode: WindowMode;
}

export interface FrequencyAnalysisResult {
    characterCount: number;
    ngramCounts: NGramFrequencyMap;
    allNGrams: Set<string>;
}

const DEFAULT_FREQUENCY_ANALYSIS_OPTIONS: FrequencyAnalysisOptions = {
    nGramSize: 1,
    mode: WindowModes.BLOCK as WindowMode
};

const DEFAULT_FREQUENCY_ANALYSIS_RESULT: FrequencyAnalysisResult = {
    characterCount: 0,
    ngramCounts: {},
    allNGrams: new Set<string>(),
}

/**
 * Generates FrequencyAnalysisResult for an individual preprocessed text.
 * @param text The ciphertext, after being converted to a string.
 * @param options Configuration for how to handle the frequency analysis.
 * @returns 
 */
export function calculateFrequency(
    text: string,
    options: FrequencyAnalysisOptions=DEFAULT_FREQUENCY_ANALYSIS_OPTIONS
): FrequencyAnalysisResult {
    if (!text) {
        return DEFAULT_FREQUENCY_ANALYSIS_RESULT;
    }

    const characterCount = text.length;

    const ngrams = generateNGrams(text, options.nGramSize, options.mode);
    const ngramCounts: NGramFrequencyMap = getNgramFrequencies(ngrams);
    const allNGrams = new Set(Object.keys(ngramCounts));

    return {
        characterCount,
        ngramCounts,
        allNGrams,
    };
}