import React ,{useState ,useEffect} from "react";

export default function useWindowSize() {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    function changeWindowSize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    console.log(width,height)
    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);
    
        return () => {
          window.removeEventListener("resize", changeWindowSize);
        };
      }, []);
    return {width, height};
}
