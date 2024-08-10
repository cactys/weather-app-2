import { INPUT_CLOSE_SVG, SLIDER_ARROW_SVG } from "./constants.js";

const svgWrapper = `
    <svg
      class="visually-hidden"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    > 
    ${INPUT_CLOSE_SVG}
    ${SLIDER_ARROW_SVG}
    </svg>`

document.body.insertAdjacentHTML('beforeend', svgWrapper)
