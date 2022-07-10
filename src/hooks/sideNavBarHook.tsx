import { useState } from 'react';

const useSideNavBar = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    console.log("isShowing", isShowing);
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useSideNavBar;