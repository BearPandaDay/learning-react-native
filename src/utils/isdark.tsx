import {useColorScheme} from 'react-native';

export const Isdark = ():boolean => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark';
};
