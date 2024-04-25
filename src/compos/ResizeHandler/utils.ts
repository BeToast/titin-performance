// export const getVwVh = (): [number, number] => {
//    return [
//       Math.max(
//          document.documentElement.clientWidth || 0,
//          window.innerWidth || 0,
//       ),
//       Math.max(
//          document.documentElement.clientHeight || 0,
//          window.innerHeight || 0,
//       ),
//    ];
// };

// // for red slant rotation
// export const rotateRedSlant = (
//    redSlant: HTMLElement,
//    vw: number,
//    vh: number,
// ): number => {
//    let tanhInput;
//    //if landscape
//    if (vw > vh) {
//       //red slant has angled spans middle 60% of vh
//       tanhInput = (vh * 0.6) / vw;
//    } //if portrait
//    else {
//       //red slant has angled spans middle 40% of vh
//       tanhInput = (vh * 0.4) / vw;
//    }
//    // console.log(tanhInput);
//    // console.log(`tangent: ${Math.tan(tanhInput)}`);

//    //slantAglRad is short for redSlantAngleRadians
//    let slantAglRad = -1 * Math.tanh(tanhInput);

//    redSlant.style.transform = `rotate(${slantAglRad}rad)`;
//    //return angle for positionLuke()
//    return slantAglRad;
// };
// //this function takes angle of redslant*(distance from vp center to lukephoto center) to get -y offest from vp center.
// export const positionLuke = (
//    lukePhoto: HTMLElement,
//    vw: number,
//    vh: number,
//    slantAglRad: number,
// ): DOMRect => {
//    const lukeOffset = lukePhoto.getBoundingClientRect();
//    //adj is the adjacent side of triangle for tanh function
//    const adj = lukeOffset.left + lukeOffset.width * 0.5 - vw * 0.5;
//    //y distance from view center to luke photo center
//    const yFromVpCenterToLukePhotoCenter = -1 * slantAglRad * adj;
//    //calculate the y pos of luke with angle and adjactent to find opposite
//    const lukeYPos = vh * 0.5 - yFromVpCenterToLukePhotoCenter;
//    //position luke
//    lukePhoto.style.top = `${lukeYPos - lukeOffset.height * 0.5}px`;
//    //return lukeOffset for slogan positioning
//    return lukeOffset;
// };
// //postition slogan relative to luke
// export const positionSlogan = (slogan: HTMLElement, lukeOffset: DOMRect) => {
//    slogan.style.top = `${lukeOffset.top}px`;
// };

// const resizeHandler = () => {
//    const { redSlant, lukePhoto, slogan } = useResizeHooks();

//    let [vw, vh] = getVwVh();
//    let slantAglRad = rotateRedSlant(redSlant!, vw, vh);
//    let lukeOffset = positionLuke(lukePhoto!, vw, vh, slantAglRad);
//    positionSlogan(slogan!, lukeOffset);
// };

// const ResizeHandler = () => {
//    useEffect(() => {
//       resizeHandler();
//    });
//    addEventListener("resize", () => {
//       resizeHandler();
//    });
//    return <></>;
// };

// export default ResizeHandler;
