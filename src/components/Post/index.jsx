export default function Post(props) {
    const title = props.title;
    const content = props.content;
    return(
        <li><b>{title}</b> - {content}</li>
    )
}