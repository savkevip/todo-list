import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Container, Header, Input, Button, TodoList } from "./styles";

export const Home = () => {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleOnChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleCreate = () => {
        const newTasks = tasks.concat([
            {
                done: false,
                text: taskText
            }
        ]);
        setTasks(newTasks);
        setTaskText("");
    }

    const handleDone = (event, index) => {
        const checkedValue = event.target.checked;
        const newTasks = [].concat(tasks);
        newTasks[index].done = checkedValue;
        setTasks(newTasks);
    }

    const handleRemove = (currentIndex) => {
        const newTasks = tasks.filter((task, index) => {
            if (index !== currentIndex) return task;
        });
    
        setTasks(newTasks);
    }

    return (
        <Container>
            <Header>
                <Input value={taskText} onChange={handleOnChange} />
                <Button onClick={handleCreate}>Create</Button>
            </Header>
            <TodoList>
                {tasks.map((task, index) => {
                    return (
                        <TodoItem
                            key={index}
                            handleDone={handleDone}
                            handleRemove={handleRemove}
                            task={task}
                            index={index}
                        />     
                    )
                })}
            </TodoList>
        </Container>
    )
}