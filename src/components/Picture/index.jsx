import "./style.css"

export default function Picture(props) {
    return (<img alt="slide-pic" src={`./img/pic${props.value}.jpg`} class={props.className}/>)
}