import "./style.css"
export default function Image(props){
    return(
        <img alt='' src={`img/img${props.index}.jpeg`}/>
    )
}