import 'styled-components';
import theme from './constants/theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof theme.color
  }
}