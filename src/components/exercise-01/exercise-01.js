import React, {useState, useEffect} from 'react'
import { timeZoneList } from './time-zone-list'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Clock() {
    const [dateState, setDateState] = useState(new Date());
    const utc = dateState.getTime() + (dateState.getTimezoneOffset() * 60000);
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div class="row">
             {timeZoneList.map((timeZone, index) => (
                <div class="card col-3 m-1" style={{width: "15rem", background: "#EBECF0"}} key={index}>
                    <div class="card-body">
                        <h5 style={{opacity: "0.5"}} className={"city"} class="card-title">{timeZone.city}</h5>
                        <h3 className={"offset"} class="card-text">{(new Date(utc + (3600000*timeZone.offset))).toLocaleTimeString()}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
