import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
        const startLoading = () => NProgress.start();
        const stopLoading = () => NProgress.done();
    
        startLoading();
        const timer = setTimeout(stopLoading, 1000);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;