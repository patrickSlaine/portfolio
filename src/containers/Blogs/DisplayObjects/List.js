import React from "react";
import "./style.css";

export default function List(props){

    const listItems = props.content.map(
        item => {
            if(props.type==="bulletpoint"){
                return <li className="list-item" itemProp="speakable" key={item.id}>• {item.value}</li>
            }
            else{
                return <li className="list-item" itemProp="speakable" key={item.id}>{item.id}: {item.value}</li>
            }
        }
        );  

    return (
        <div>
            <div className="list-pretext" itemProp="speakable">{props.before}</div>

            {props.type === "bulletpoint" ?
                <ul>
                    {listItems}
                </ul>
            :
                <ol>
                    {listItems}
                </ol>
            }
        </div>
    )
}