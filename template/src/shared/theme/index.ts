import { ETheme, IThemeSliceProps } from '~types';

export const LIGHT_SCHEME: IThemeSliceProps = {
  theme: ETheme.light,
  color: {
    primary: '#FFF',
    primary_variant: '#FFF',
    secondary: '#FFF',
    secondary_variant: '#FFF',
    background: '#FFF',
    surface: '#FFF',

    success: '#28a745',
    pending: '#ffc107',
    error: '#dc3545',

    on_primary: '#FFF',
    on_secondary: '#FFF',
    on_background: '#FFF',
    on_surface: '#FFF',

    on_success: '#FFF',
    on_pending: '#FFF',
    on_error: '#FFF',

    placeholder: '#6c757d',
  },
};

export const DARK_SCHEME: IThemeSliceProps = {
  theme: ETheme.dark,
  color: {
    primary: '#FFF',
    primary_variant: '#FFF',
    secondary: '#FFF',
    secondary_variant: '#FFF',
    background: '#FFF',
    surface: '#FFF',

    success: '#28a745',
    pending: '#ffc107',
    error: '#dc3545',

    on_primary: '#FFF',
    on_secondary: '#FFF',
    on_background: '#FFF',
    on_surface: '#FFF',

    on_success: '#FFF',
    on_pending: '#FFF',
    on_error: '#FFF',

    placeholder: '#6c757d',
  },
};

export const WHATEVER_SCHEME: IThemeSliceProps = {
  theme: ETheme.whatever,
  color: {
    primary: '#FFF',
    primary_variant: '#FFF',
    secondary: '#FFF',
    secondary_variant: '#FFF',
    background: '#FFF',
    surface: '#FFF',

    success: '#28a745',
    pending: '#ffc107',
    error: '#dc3545',

    on_primary: '#FFF',
    on_secondary: '#FFF',
    on_background: '#FFF',
    on_surface: '#FFF',

    on_success: '#FFF',
    on_pending: '#FFF',
    on_error: '#FFF',

    placeholder: '#6c757d',
  },
};

export * from './color';
export * from './typo';
export * from './size';
