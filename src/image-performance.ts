import { optimizedHeroHome, optimizedLoginImage } from "./optimizedImages";

const style = document.createElement("style");
style.setAttribute("data-pauliceia-image-performance", "true");
style.textContent = `
  .hero {
    background-image: linear-gradient(90deg, rgba(37,37,37,.82) 0%, rgba(212,150,106,.78) 100%), url(${optimizedHeroHome}) !important;
    background-size: cover !important;
    background-position: center !important;
  }
  .login-image {
    background-image: linear-gradient(180deg, rgba(37,37,37,.18) 0%, rgba(37,37,37,.68) 100%), linear-gradient(135deg, rgba(241,90,36,.24) 0%, rgba(51,51,51,.28) 100%), url(${optimizedLoginImage}) !important;
    background-size: cover !important;
    background-position: center !important;
    background-blend-mode: normal, multiply, normal !important;
  }
  .login-options label { gap: 2px !important; }
`;
document.head.appendChild(style);
