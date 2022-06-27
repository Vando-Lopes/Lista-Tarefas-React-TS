import * as C from "./styles"
import { Item } from "../../types/item" 
import { useState } from "react"
type Props ={
    item:Item,
    onChangeDone: (id: number) => void
}

export const ListItem = ({item, onChangeDone}: Props) =>{
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e)=>{
                    console.log(item.done)
                    setIsChecked(e.target.checked)
                    onChangeDone(item.id);
                }}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}

export default ListItem