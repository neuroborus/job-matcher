import { Injectable } from '@nestjs/common';
import { ModelEntity } from '@/entities/model';
import { NormalizedEntity, WeightedEntity } from '@/entities/units';

@Injectable()
export class CalculationService {
  constructor() {}

  public normalizeEntities(entities: ModelEntity[]) {
    const normalized: NormalizedEntity[] = [];
    let currentWord = '';
    let currentEntity = '';
    let scores: number[] = [];

    for (const entity of entities) {
      const word = entity.word;
      const score = entity.score;
      const type = entity.entity;

      if (word.startsWith('##')) {
        // Continuation of the current word
        currentWord += word.slice(2); // Remove the '##' prefix
        scores.push(score); // Add the score of the subtoken
      } else {
        // Save the completed word and its metadata if it exists
        if (currentWord) {
          normalized.push({
            word: currentWord.toLowerCase(),
            entity: currentEntity,
            score: scores.reduce((a, b) => a + b, 0) / scores.length, // Average score
          });
        }
        // Start a new word and reset metadata
        currentWord = word;
        currentEntity = type;
        scores = [score];
      }
    }

    // Add the last word if it exists
    if (currentWord) {
      normalized.push({
        word: currentWord.toLowerCase(),
        entity: currentEntity,
        score: scores.reduce((a, b) => a + b, 0) / scores.length,
      });
    }

    return normalized;
  }

  public weightedJaccardSimilarity(
    entities1: WeightedEntity[],
    entities2: WeightedEntity[],
  ) {
    // Create maps for quick lookup of words and their scores
    const map1 = new Map(entities1.map((e) => [e.word, e.score]));
    const map2 = new Map(entities2.map((e) => [e.word, e.score]));

    let intersectionScore = 0;
    let unionScore = 0;

    // Calculate intersection and union scores
    for (const [word, score] of map1.entries()) {
      if (map2.has(word)) {
        intersectionScore += Math.min(score, map2.get(word)!); // Use the minimum score
      }
      unionScore += score;
    }

    for (const [word, score] of map2.entries()) {
      if (!map1.has(word)) {
        unionScore += score;
      }
    }

    return intersectionScore / unionScore; // Return similarity ratio
  }
}
