import { browser } from '$app/environment';

const STORAGE_KEY = 'theme';
const PAPER_LIGHT = '#faf8f4';
const PAPER_DARK = '#0f0e0c';

export type UserOverrideValue = "dark" | "light" | null;

export interface Theme {
  dark: boolean;
  userOverride: UserOverrideValue;
  init(): void;
  toggle(): void;
  reset(): void;
} 

let dark = $state(false);
let userOverride = $state<UserOverrideValue>(null);

function applyThemeColor(isDark: boolean) {
  const color = isDark ? PAPER_DARK : PAPER_LIGHT;
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = color;
}

function apply(isDark: boolean) {
  dark = isDark;
  document.documentElement.classList.toggle('dark', isDark);
  applyThemeColor(isDark);
}

function init() {
  if (!browser) return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null;

  userOverride = saved;
  apply(saved ? saved === 'dark' : mediaQuery.matches);

  mediaQuery.addEventListener('change', (e) => {
    if (!userOverride) apply(e.matches);
  });
}

function toggle() {
  const next = !dark;
  userOverride = next ? 'dark' : 'light';
  localStorage.setItem(STORAGE_KEY, userOverride);
  apply(next);
}

function reset() {
  userOverride = null;
  localStorage.removeItem(STORAGE_KEY);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  apply(mediaQuery.matches);
}

export const theme: Theme = {
  get dark() { return dark; },
  get userOverride() { return userOverride; },
  init,
  toggle,
  reset,
};