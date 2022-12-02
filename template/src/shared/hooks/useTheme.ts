import { useAppSelector } from './useAppSelector';

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme);
  return theme;
};
