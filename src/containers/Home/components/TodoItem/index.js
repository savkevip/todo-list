import React from "react";
import { TodoItemContainer, Checkbox, Text, Button } from "../../styles";

export const TodoItem = ({
    handleDone,
    task: {
        done,
        text
    },
    handleRemove,
    index
}) => {
    return (
        <TodoItemContainer>
            <Checkbox
                checked={done}
                onChange={(event) => handleDone(event, index)}
                type="checkbox"
                />
            <Text done={done}>{text}</Text>
            <Button onClick={() => handleRemove(index)}>Remove</Button>
        </TodoItemContainer>
    )
}