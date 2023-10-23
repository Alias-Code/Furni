// ARTICLES

let articles = document.querySelectorAll(".article");

articles.forEach(function (article) {
  let card = article.querySelector(".green-card");
  let img = article.querySelector(".image");
  let blackBtn = article.querySelector(".black-button");

  article.addEventListener("mouseover", () => {
    card.style.height = "80%";
    img.style.transform = "translateY(-20px)";
    blackBtn.style.transform = "translateY(15px)";
    blackBtn.style.opacity = "1";
  });

  article.addEventListener("mouseleave", () => {
    card.style.height = "0%";
    img.style.transform = "translateY(0px)";
    blackBtn.style.opacity = "0";
    blackBtn.style.transform = "translateX(0px)";
  });
});

// TESIMONIALS

const animation = document.getElementById("animation-part");
const dots = document.querySelectorAll(".bi-dot");

let baseNumber = 0;

function moveRight() {
  animation.style.transition = "transform 1s ease";
  animation.style.transform = "translateX(150%)";

  if (baseNumber === 2) {
    dots[2].style.color = "rgba(128, 128, 128, 0.516)";
    dots[0].style.color = "#3b5d50";

    baseNumber = 0;
  } else {
    dots[baseNumber].style.color = "rgba(128, 128, 128, 0.516)";
    dots[baseNumber + 1].style.color = "#3b5d50";

    baseNumber++;
  }

  setTimeout(function () {
    animation.style.transition = "none";
    animation.style.transform = "translateX(-100%)";

    setTimeout(function () {
      animation.style.transition = "transform 1s ease";
      animation.style.transform = "translateX(0)";
    }, 20);
  }, 750);
}

setInterval(moveRight, 10000);

const arrows = document.querySelectorAll(".arrow");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    moveRight();
  });
});

// BURGER MENU

let burgerMenu = document.getElementById("burger-menu");
let header = document.querySelector("header");
let secondPart = document.querySelector(".second-part");

let active = false;

burgerMenu.addEventListener("click", () => {
  header.style.transition = "all 0.4s ease";
  secondPart.style.transition = "all 0.4s ease";

  if (!active) {
    header.style.height = "60em";
    secondPart.style.marginTop = "20em";
  } else {
    header.style.height = "40em";
    secondPart.style.marginTop = "0";
  }

  active = !active;
});

// LIGHT MODE & NIGHT MODE

let iconSunMoon = document.getElementById("iconSunMoon");

let headerContainer = document.getElementById("header-container");
let secondHeaderContainer = document.querySelector(".second-part");

let mainContainer = document.getElementById("main-container");
let footerContainer = document.getElementById("footer-container");

let elementsHeader = document.querySelectorAll("header h2");
let elementsMain = document.querySelectorAll("main *");
let elementsFooter = document.querySelectorAll("footer *");

let images = document.querySelectorAll(".six-part img");

let fontCard = document.querySelector(".green-card");

let buttons = document.querySelectorAll("main button");

let activeIcon = false;

iconSunMoon.addEventListener("click", () => {
  if (!activeIcon) {
    iconSunMoon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z" fill="currentColor" /></svg>    `;

    headerContainer.style.background = "#31463f";
    secondHeaderContainer.style.background = "#31463f";
    mainContainer.style.background = "rgb(53, 51, 51)";
    footerContainer.style.background = "#000000";

    fontCard.style.background = "rgba(84, 102, 95, 0.2)";

    elementsHeader.forEach((element) => {
      element.style.color = "rgb(0, 0, 0)";
    });

    elementsMain.forEach((element) => {
      element.style.color = "#fff";
    });

    elementsFooter.forEach((element) => {
      element.style.color = "#fff";
    });

    images.forEach((element) => {
      element.style.background = "rgba(59, 93, 80, 0.25)";
    });
  } else {
    iconSunMoon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z" fill="currentColor" /></svg>`;

    headerContainer.style.background = "#3b5d50";
    secondHeaderContainer.style.background = "#3b5d50";
    mainContainer.style.background = "#eff2f1";
    footerContainer.style.background = "#fff";

    elementsHeader.forEach((element) => {
      element.style.color = "#fff";
    });

    elementsMain.forEach((element) => {
      element.style.color = "rgb(0, 0, 0)";
    });

    elementsFooter.forEach((element) => {
      if (
        element.tagName.toLowerCase() === "i" &&
        element.parentElement.tagName.toLowerCase() === "button"
      ) {
        element.style.color = "#fff";
      } else {
        element.style.color = "rgb(0, 0, 0)";
      }
    });

    images.forEach((element) => {
      element.style.background = "rgba(59, 93, 80, 0.1)";
    });

    buttons.forEach((element) => {
      element.style.color = "#fff";
    });
  }

  activeIcon = !activeIcon;
});

// SCROLL ANIMATION

window.addEventListener("scroll", function () {
  let thirdPart1 = document.querySelector(".third-part-1");
  let thirdPart2 = document.querySelector(".third-part-2");

  let fourthPart2 = document.querySelector(".fourth-part-2");
  let fourthPart3 = document.querySelector(".fourth-part-3 img");

  let fivePart2 = document.querySelector(".five-part-2");

  let sixPart = document.querySelector(".six-part");

  let eightPart2 = document.querySelectorAll(".articles");

  let arrow = document.getElementById("arrow");

  // TROISIEME PARTIE

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrow.style.opacity = "inline";
    arrow.style.transition = "opacity 0.3s ease";
  }

  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    thirdPart2.style.opacity = "1";
    thirdPart2.style.paddingTop = "0";
    thirdPart1.style.left = "0";
    thirdPart1.style.opacity = "1";
  }

  // QUATRIEME PARTIE

  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    fourthPart2.style.opacity = "1";
    fourthPart2.style.paddingTop = "0";
    fourthPart3.style.right = "0";
    fourthPart3.style.opacity = "1";
  }

  // CINQUIEME PARTIE

  if (
    document.body.scrollTop > 1800 ||
    document.documentElement.scrollTop > 1800
  ) {
    fivePart2.style.opacity = "1";
    fivePart2.style.paddingTop = "0";
  }

  // SIXIEME PARTIE

  if (
    document.body.scrollTop > 2500 ||
    document.documentElement.scrollTop > 2500
  ) {
    sixPart.style.opacity = "1";
    sixPart.style.right = "0";
  }

  // HUITIEME PARTIE

  if (
    document.body.scrollTop > 3500 ||
    document.documentElement.scrollTop > 3500
  ) {
    eightPart2.forEach((element) => {
      element.style.opacity = "1";
      element.style.paddingTop = "0";
    });
  }
});
