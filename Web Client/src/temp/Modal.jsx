import { useState } from "react"

function Modal(){
    const [modal,openModal] = useState(0)
    return (<>
        <div class={`hidden absolute w-60% ${modal===1?"block":""}`}>

        </div>
        <div class="" onClick={()=>useState(1)}>Ello</div>
    </>)
}
export default Modal