import 'nextra-theme-docs/style.css'
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-bash")
require("prismjs/components/prism-python")
require("prismjs/components/prism-markup")

export default function Nextra({ Component, pageProps }) {
    return <Component {...pageProps} />
}