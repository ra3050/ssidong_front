import { useState, useRef, useEffect } from "react";
import { Wrapper, Slider, Image } from "./SliderHTML";

const resourceURL = ["./resource/contact/picture1.png", "./resource/contact/picture2.png", "./resource/contact/picture3.png", "./resource/contact/picture4.png", "./resource/contact/picture5.png", "./resource/contact/picture6.png"]
var arr = [<Image src={resourceURL[0]} />, <Image src={resourceURL[1]} />, <Image src={resourceURL[2]} />, <Image src={resourceURL[3]} />, <Image src={resourceURL[4]} />, <Image src={resourceURL[5]} />]
var translateXvalue = -(arr.length * 464);

const ImageSlider = () => {
    const ref = useRef()
    const [imageArr, setImagearr] = useState(arr)

    useEffect(() => {
        const interval = setInterval(() => {
            arr = [...arr, <Image src={resourceURL[arr.length % 6]} />]
            translateXvalue = -(arr.length * 464)
            ref.current.style.transform = `translateX(${translateXvalue}px)`
            ref.current.style.transition = `transform ${arr.length * 6}s linear`
            setImagearr(arr)
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [imageArr])

    return (
        <Slider ref={ref}>
            {imageArr}
        </Slider>
    )
}

export default ImageSlider;