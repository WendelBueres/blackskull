import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root{
  //Palette colors
    
    //White
    --white: #FFFFFF;

    //Black
    --black1: #0B0B0B;

    //Oranges
    --orange1: #FF9601;
    --orange2: #FFC470;

    //Darks
    --dark1: #1C1C1E;
    --dark2: #2C2C2E;
    --dark3: #3A3A3C;


    //Grays
    --gray1: #9A9A9A;
    --gray2: #CACACA;

    //Background
    --background: #F1F1F1;
    
    //Scroll
    scroll-behavior: smooth;
    
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: var(--dark3);
}

::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--gray1);
}

* {
  scrollbar-width: thin;
  scrollbar-color: black transparent;
}
}


`;

export default Global;
