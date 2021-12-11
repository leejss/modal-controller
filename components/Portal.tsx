import React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted
    ? createPortal(children, document.getElementById("portal") as HTMLElement)
    : null;
};

export default Portal;
