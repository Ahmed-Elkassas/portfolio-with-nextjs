import { ThemeProvider } from "styled-components"
import GlobalStyles from "./global"

const themes = {
    fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
    },
    colors: {
        primary: "hsl(204,23.8%,95.9%)",
        secondry: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
    },
    backgrouns: {
        mainBackground: "#0F1624",
        secondBackground: "hsl(232.7,27.3%,23.7%)",
    },
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    }
}

export default function Theme ({children}) {
    <ThemeProvider theme={themes}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
} 