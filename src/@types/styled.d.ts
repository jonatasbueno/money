// importando dessa forma estamos extendendo o styled-components
import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

// define que a interface default do styled-components extende a tipagem do nosso objeto de tokens default
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
