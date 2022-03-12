import { memo } from "react"

function Donepercent(props){
    return(
        <>
         show Ratio:{(props.done.length /(props.list.length+props.done.length))*100}%
        </>
    )
}
export default memo(Donepercent)