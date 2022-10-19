import { useState } from '#imports';

export const useNavState = () => {
  return useState('navState', () => false)
}