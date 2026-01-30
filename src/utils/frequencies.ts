import { NGramFrequencyMap } from "../types";

/**
 * Calculates the frequencies of input n-grams.
 * @param ngrams 
 * @returns 
 */
export function getNgramFrequencies(ngrams: string[]): NGramFrequencyMap {
    const frequency: NGramFrequencyMap  = {};
    for (const ngram of ngrams) {
        frequency[ngram] = (frequency[ngram] || 0) + 1;
    }

    return frequency
}