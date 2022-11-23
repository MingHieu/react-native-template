type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export interface IThemeColor {
  primary: Color;
  primary_variant: Color;
  secondary: Color;
  secondary_variant: Color;
  background: Color;
  surface: Color;

  success: Color;
  pending: Color;
  error: Color;

  on_primary: Color;
  on_secondary: Color;
  on_background: Color;
  on_surface: Color;

  on_success: Color;
  on_pending: Color;
  on_error: Color;

  placeholder: Color;
}

export enum ETheme {
  light = 1,
  dark = 2,
  whatever = 3,
}

export interface IThemeSliceProps {
  theme: ETheme;
  color: IThemeColor;
}
