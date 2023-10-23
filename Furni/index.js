const yellowSvg = document.getElementById("yellow-svg");
const lightSvg = document.getElementById("light-svg");
const greenSvg = document.getElementById("green-svg");

const shippingSvg = document.getElementById("shipping");
const shopSvg = document.getElementById("shop");
const supportSvg = document.getElementById("support");
const returnSvg = document.getElementById("return");

const loginSvg = document.getElementById("loginIcon");
const cartSvg = document.getElementById("cartIcon");
const sunSvg = document.getElementById("iconSunMoon");

const loginSvgContent = `
<svg
width="18"
height="20"
viewBox="0 0 18 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>
`;

const cartSvgContent = `
<svg
width="24"
height="23"
viewBox="0 0 24 23"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>
`;

const sunSvgContent = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z" fill="currentColor" /></svg>`;

const yellowSvgContent = `
        <svg
            width="255"
            height="217"
            viewBox="0 0 255 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="213.5" r="3.5" fill="#F9BF29" />
          </svg>
`;

const lightSvgContent = `
<svg
          width="255"
          height="217"
          viewBox="0 0 255 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.15">
            <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="3.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="33.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="63.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="93.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="123.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="153.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="183.5" r="3.5" fill="white" />
            <circle cx="3.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="34.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="65.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="96.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="127.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="158.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="189.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="220.5" cy="213.5" r="3.5" fill="white" />
            <circle cx="251.5" cy="213.5" r="3.5" fill="white" />
          </g>
        </svg>
`;

const greenSvgContent = `

<svg width="255" height="217" viewBox="0 0 255 217" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="3.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="33.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="63.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="93.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="123.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="153.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="183.5" r="3.5" fill="#35736E"/>
<circle cx="3.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="34.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="65.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="96.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="127.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="158.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="189.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="220.5" cy="213.5" r="3.5" fill="#35736E"/>
<circle cx="251.5" cy="213.5" r="3.5" fill="#35736E"/>
</svg>

`;

const shippingSvgContent = `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6591 35.3637C33.6046 35.3637 35.1818 33.7865 35.1818 31.841C35.1818 29.8954 33.6046 28.3182 31.6591 28.3182C29.7135 28.3182 28.1364 29.8954 28.1364 31.841C28.1364 33.7865 29.7135 35.3637 31.6591 35.3637Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3409 35.3637C15.2865 35.3637 16.8636 33.7865 16.8636 31.841C16.8636 29.8954 15.2865 28.3182 13.3409 28.3182C11.3954 28.3182 9.81818 29.8954 9.81818 31.841C9.81818 33.7865 11.3954 35.3637 13.3409 35.3637Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.1364 17.0454H33.7727L38 21.2727V28.3181H28.1364V17.0454Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.1364 10H7V28.3182H28.1364V10Z" stroke="black" stroke-width="2.81818" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const shopSvgContent = `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2 9L10 14.6V34.2C10 34.9426 10.295 35.6548 10.8201 36.1799C11.3452 36.705 12.0574 37 12.8 37H32.4C33.1426 37 33.8548 36.705 34.3799 36.1799C34.905 35.6548 35.2 34.9426 35.2 34.2V14.6L31 9H14.2Z" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.2 20.2C28.2 21.6852 27.61 23.1095 26.5598 24.1597C25.5096 25.21 24.0852 25.8 22.6 25.8C21.1148 25.8 19.6904 25.21 18.6402 24.1597C17.59 23.1095 17 21.6852 17 20.2" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14.6H35.2" stroke="black" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const supportSvgContent = `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 37C29.9558 37 36 30.9558 36 23.5C36 16.0442 29.9558 10 22.5 10C15.0442 10 9 16.0442 9 23.5C9 30.9558 15.0442 37 22.5 37Z" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 28.9C25.4823 28.9 27.9 26.4823 27.9 23.5C27.9 20.5176 25.4823 18.1 22.5 18.1C19.5177 18.1 17.1 20.5176 17.1 23.5C17.1 26.4823 19.5177 28.9 22.5 28.9Z" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3205 27.3204L32.0445 33.0444" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9555 33.0444L18.6795 27.3204" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3205 19.6796L32.0445 13.9556" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3205 19.6796L31.086 14.9141" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9555 13.9556L18.6795 19.6796" stroke="black" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const returnSvgContent = `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3333 37.3333L11 32L16.3333 26.6666" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 23.9999V26.6665C35 28.081 34.4381 29.4376 33.4379 30.4378C32.4377 31.438 31.0812 31.9999 29.6667 31.9999H11" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.6667 7.99988L35 13.3332L29.6667 18.6665" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21.3333V18.6666C11 17.2521 11.5619 15.8955 12.5621 14.8953C13.5623 13.8952 14.9188 13.3333 16.3333 13.3333H35" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

yellowSvg.innerHTML = yellowSvgContent;
lightSvg.innerHTML = lightSvgContent;
greenSvg.innerHTML = greenSvgContent;

shippingSvg.innerHTML = shippingSvgContent;
shopSvg.innerHTML = shopSvgContent;
supportSvg.innerHTML = supportSvgContent;
returnSvg.innerHTML = returnSvgContent;

loginSvg.innerHTML = loginSvgContent;
cartSvg.innerHTML = cartSvgContent;
sunSvg.innerHTML = sunSvgContent;
