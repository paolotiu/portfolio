import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const activeHeadingAtom = atom<string | null>(null);

export const animateSignatureAtom = atomWithStorage('animateSignature', true, {
  getItem: (key) =>
    JSON.parse(sessionStorage.getItem(key) || 'true') as boolean,
  setItem: (key, val) => sessionStorage.setItem(key, JSON.stringify(val)),
});
