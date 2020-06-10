import { FORASTEROS_RP_CHARACTERS } from '../constants';
export const getCharactersByQuery = searchQuery => {
  return FORASTEROS_RP_CHARACTERS.filter(character => {
    const joinedValues = Object.values(character)
      .join('')
      .toLowerCase();
    const normalizedValues = joinedValues
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '');
    const allSearchValues = joinedValues + normalizedValues;
    return allSearchValues.includes(searchQuery);
  });
};
