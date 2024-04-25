// import { useEffect } from "react";
// import useResizeHooks from "./useResizeHooks";
// import { getVwVh, positionLuke, positionSlogan, rotateRedSlant } from "./utils";

// const useResizeHandler = () => {
//    const { redSlant, lukePhoto, slogan } = useResizeHooks();

//    useEffect(() => {
//       console.log("resizing");
//       // const handleResize = () => {
//       //    console.log("resizing");
//       //    if (redSlant && lukePhoto && slogan) {
//       //       const [vw, vh] = getVwVh();
//       //       const slantAglRad = rotateRedSlant(redSlant, vw, vh);
//       //       const lukeOffset = positionLuke(lukePhoto, vw, vh, slantAglRad);
//       //       positionSlogan(slogan, lukeOffset);
//       //    }
//       // };

//       // handleResize();
//       // window.addEventListener("resize", handleResize);
//       // return () => window.removeEventListener("resize", handleResize);
//    }, [redSlant, lukePhoto, slogan]);

//    return <></>;
// };

// export default useResizeHandler;
