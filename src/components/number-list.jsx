import NumberItem from "./number-item";

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item, index) => 
        <NumberItem value ={item} key={index}/>
    );

    return(
        <ul>{listItems}</ul>
    );
}