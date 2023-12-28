/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Overpass": ['"Overpass"', "sans-serif"],
        "Ubuntu": ["'Ubuntu'", "sans-serif"]
      },
      colors: {
        "lightRedBG": ["hsl(355, 100%, 74%)"],
        "VeryLightRed": ["hsl(13, 100%, 72%)"],
        "footDarkBlue": ["hsl(240, 10%, 16%)"]

      },
      backgroundImage: {
        "navImage": "url('../assets/blogr-landing-page-main/images/NavFigma.svg')",
        "navDesktop": "url('../assets/blogr-landing-page-main/images/NavFigmaDesktop.svg')",
        "Arrow": "url('../assets/blogr-landing-page-main/images/Arrow.png')",
        "ReArrow": "url('../assets/blogr-landing-page-main/images/ReverseArrow.png')",  
        "CloseMenu": "url('../assets/blogr-landing-page-main/images/CloseMenu.svg')",
        "OpenMenu": "url('../assets/blogr-landing-page-main/images/Hamburger.svg')",
        "IllustrationM": "url('../assets/blogr-landing-page-main/images/illustration-editor-mobile.png')",
        "IllDesktop": "url('../assets/blogr-landing-page-main/images/Ilustracion.png')",
        "mobileSection": "url('../assets/blogr-landing-page-main/images/ArticleFigma.png')" ,
        "mobileSecDesktop": "url('../assets/blogr-landing-page-main/images/ArticleDesktopFigma.png')",
        "laptopIll": "url('../assets/blogr-landing-page-main/images/LaptopMIllustration.svg')",
        "DesklaptopIll": "url('../assets/blogr-landing-page-main/images/LaptopDIllustration.svg')",
        "DeskBg": "url('../assets/blogr-landing-page-main/images/illustrationDesk.svg')",
        "FootM": "url('../assets/blogr-landing-page-main/images/FooterBgMobile.svg')",
        "FootDesk": "url('../assets/blogr-landing-page-main/images/FooterBg.svg')"

      }
    },
  },
  plugins: [],
}

