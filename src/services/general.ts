import { generalCollection } from '@/firebase/config';
import { GENERAL_ID } from '@/constants/globals';
import { doc, updateDoc } from 'firebase/firestore';
import { getAny } from './core';

export async function getGeneral() {
  return getAny<GeneralType>(generalCollection, GENERAL_ID);
}

export async function updateCanPlay(canPlay: boolean) {
  const generalDoc = doc(generalCollection, GENERAL_ID);

  await updateDoc(generalDoc, {
    canPlay,
  });
}

export async function updateTotalCards(totalCards: number) {
  const generalDoc = doc(generalCollection, GENERAL_ID);

  await updateDoc(generalDoc, {
    totalCards,
  });
}
