// import { useEffect, useState } from "react";
// import {BiArrowFromBottom} from "react-icons/bi"
// import { classNames } from "../utils/classNames";
// 
// export default ScrollToTop = ()=> {
//     const [isVisible, setVisible]= useState(false)
// 
//     const toggleVisibility = ()=> {
//          if(window.pageYOffset > 300){
//              setVisible(true)
//          } else {
//              setVisible(false)
//          }
//     }
// 
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         })
//     }
// 
//     useEffect(()=> {
//     window.addEventListener("scroll", toggleVisibility );
// 
//     return() => {
//         window.removeEventListener("scroll", toggleVisibility);
//     }
//     }, [])
// 
//     return (
//         <div className="fixed bottom-2 right-2">
//             <button type="button" onClick={scrollToTop} className={classNames(
//                 isVisible ? "opacity-100" : "opacity-0"
//             )}>
//                 <BiArrowFromBottom className= "h-6 w-6" aria-hidden= "true" />
//             </button>
//         </div>
//     )
// }
