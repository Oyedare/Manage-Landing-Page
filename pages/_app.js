import GlobalStyles from "../styles/Global"
import { ThemeProvider } from "styled-components"

const theme = {
  mobile: '375px'
};

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
