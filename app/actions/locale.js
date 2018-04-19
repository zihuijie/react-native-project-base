import { AsyncStorage } from 'react-native';
import { LOCALE_SET } from './actionTypes';

export const localeSet = lang => ({
  type: LOCALE_SET,
  lang,
});

// localstorage name
export const setLocale = lang => (dispatch) => {
  try {
    await AsyncStorage.setItem('@aladdinGo: lang', lang)
  } catch (error) {
    console.log(error);
  }
  dispatch(localeSet(lang));
};
