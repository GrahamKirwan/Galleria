import { createContext, useState } from "react";

export const SlideshowContext = createContext();

export function SlideshowContextProvider(props) {
  
    const [slideshowActive, setSlideshowActive] = useState(false);

    function updateSlideshowContext(bool) {
        if(bool == true) {
            setSlideshowActive(true)
        } else {
            setSlideshowActive(false)
        }
    }


  const context = {
    slideshowActive: slideshowActive,
    updateSlideshowContext: updateSlideshowContext,
  };

  return (
    <SlideshowContext.Provider value={context}>
      {props.children}
    </SlideshowContext.Provider>
  );
}
