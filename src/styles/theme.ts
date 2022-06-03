interface ITheme {
  colors: {
    background: {
      primary_dark: string,
      primary_dark_light: string,
      secondary_light: string,
      secondary_dark: string,
      secondary_darker: string,
      secondary_colorful: string,
    },
    text: {
      primary_light: string,
    }
  }
}
const theme: ITheme = {
  colors: {
    background: {
      primary_dark: "#181C23",
      primary_dark_light: "#202833",
      secondary_light: "#4E5D78",
      secondary_dark: "#3d495e",
      secondary_darker: "#323d4f",
      secondary_colorful: "#377DFF",
    },
    text: {
      primary_light: "#FFF",
    },
  },
};

export default theme;
export type { ITheme };
