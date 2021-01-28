export const ColorPalette = {
  White: '#FFFFFF',
  Black: '#000000',

  Gray10: '#F7F8F9',
  Gray20: '#EAEDED',
  Gray30: '#E9EAEB',
  Gray40: '#DEDFE0',
  Gray50: '#A4A5A6',
  Gray60: '#939799',
  Gray70: '#7C868A',
  Gray80: '#5C6366',
  Gray90: '#454A4D',
  Gray100: '#2F3233',

  Blue10: '#F7FBFF',
  Blue20: '#E5F2FF',
  Blue30: '#B9D8F7',
  Blue40: '#A2CBF5',
  Blue50: '#177EE5',
  Blue60: '#297BCC',
  Blue70: '#246BB2',
  Blue80: '#1F5C99',
  Blue90: '#1C548C',
  Blue100: '#1A4D80',

  Red20: '#FFE5EC',
  Red40: '#F593AB',
  Red50: '#D92B57',
  Red70: '#B22447',

  Yellow50: '#FFD91A',

  BlueGreen50: '#17D4E5',

  Purple50: '#7379FF',

  Green50: '#56D99A',
} as const;

export const Tokens = {
  Danger: ColorPalette.Red50,
  Success: ColorPalette.Blue50,

  TextError: ColorPalette.Red50,

  Link01: ColorPalette.Gray70,

  Overlay01: ColorPalette.Gray100,

  Focus: ColorPalette.Blue50,

  HoverPrimary: ColorPalette.Blue70,
  HoverSecondary: ColorPalette.Blue50,
  HoverTertiary: ColorPalette.Blue30,
  HoverUi: ColorPalette.Gray20,
  HoverSelectedUi: ColorPalette.Gray40,
  HoverDanger: ColorPalette.Red70,
  HoverInput: ColorPalette.Gray70,

  ActivePrimary: ColorPalette.Blue100,
  ActiveSecondary: ColorPalette.Blue70,
  ActiveTertiary: ColorPalette.Blue50,
  ActiveFourth: ColorPalette.Blue10,
  ActiveUi: ColorPalette.Blue20,
  ActiveSelectedUi: ColorPalette.Blue50,
  ActiveDanger: ColorPalette.Red70,

  SelectedUi: ColorPalette.Gray20,

  Disabled01: ColorPalette.Gray30,
  Disabled02: ColorPalette.Gray80,
  Disabled03: ColorPalette.Gray90,
} as const;
