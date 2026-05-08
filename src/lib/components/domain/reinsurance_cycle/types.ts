// types.ts

export type LOB = 'property_cat' | 'casualty' | 'specialty';

export type MarketCondition = 'hard' | 'soft' | 'neutral';
export type CapitalMobility = 'slow' | 'medium' | 'fast';
export type NoiseLevel = 'low' | 'medium' | 'high';

// --- Pricing Model Interface (modular, swappable) ---

export interface PricingModelInput {
  combinedRatioHistory: number[];   // trailing quarters
  capitalRatio: number;             // current / target
  targetCombined: number;
  pricingLag: number;               // quarters
}

export interface PricingModel {
  name: string;
  description: string;
  computeRateChange: (input: PricingModelInput) => number;
}

// --- Simulation Parameters ---
export interface LOBParams {
  lob: LOB;
  baselineLossRatio: number;        // e.g. 0.65 for PropCat
  expenseRatio: number;             // e.g. 0.30
  targetCombined: number;           // e.g. 0.95
  pricingAlpha: number;             // rate sensitivity to combined ratio
  pricingBeta: number;              // rate sensitivity to capital pressure
  catContagionFactor: number;       // spillover from PropCat cat shock
}

export interface SimParams {
  years: number;                    // simulation length
  pricingLag: number;               // quarters, shared across LOBs
  capitalMobility: CapitalMobility;
  capitalLag: number;               // quarters for new capital to enter
  startingCondition: MarketCondition;
  noiseLevel: NoiseLevel;
  hurdleRate: number;               // minimum ROE to attract capital, e.g. 0.10
  pricingModel: PricingModel;
}

// --- Per-tick state ---

export interface LOBState {
  lob: LOB;
  capital: number;                  // normalized, 1.0 = target
  combinedRatio: number;
  rateChange: number;               // YoY %
  lossRatio: number;
  capacity: number;                 // derived from capital
  roe: number;
}

export interface SimTick {
  quarter: number;                  // 0-indexed
  year: number;                     // derived: quarter / 4
  lobs: Record<LOB, LOBState>;
  shockEvents: ShockEvent[];        // shocks active this tick
}

// --- Shocks ---

export type ShockType =
  | 'cat_1_in_10'
  | 'cat_1_in_100'
  | 'capital_surge'
  | 'recession'
  | 'social_inflation';

export interface ShockEvent {
  type: ShockType;
  triggeredAtQuarter: number;
  durationQuarters: number;
  magnitude: number;                // normalized impact scalar
}

// --- Full simulation result ---

export interface SimResult {
  params: SimParams;
  ticks: SimTick[];                 // full history, pre-computed
  totalQuarters: number;
}