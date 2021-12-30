import Image from "../image"
import './style.css'
export default function Gallery(props){
    let list_1 = props.list.filter(item => item <= 5);
    let list_2 = props.list.filter(item => (item > 5) && (item <= 10));
    let list_3 = props.list.filter(item => item > 10);
    return(
        <div class="container">
            <div class="col">
                { list_1.map(item => <Image index={item}/>) }
            </div>
            <div class="col">
                { list_2.map(item => <Image index={item}/>) }
            </div>
            <div class="col">
                { list_3.map(item => <Image index={item}/>) }
            </div>
            
           
        </div>
    )
}