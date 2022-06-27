import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/item";
import { ListItem } from "./components/List-Item";
import { AddArea } from "./components/AddArea";

const App = () =>{

  const [List, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar o pão na padaria",
      done: false
    },
    {
      id: 2,
      name: "Comprar um bolo na padaria",
      done: false
    }
  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...List];
    newList.push({
      id: List.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleChangeDone = (id: number) =>{
    let newList = [...List];
    newList[id -1].done = !newList[id -1].done
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {List.map((item, index) =>
        (
          <ListItem item={item} key={index} onChangeDone={handleChangeDone}></ListItem>
        ))}
      </C.Area>
    </C.Container>

  );

}

export default App