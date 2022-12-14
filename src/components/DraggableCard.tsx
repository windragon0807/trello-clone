import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragabbleCardProps {
    index: number;
    toDoId: number;
    toDoText: string;
}

const DraggableCard = ({ index, toDoId, toDoText }: IDragabbleCardProps) => {
    return (
        // ๐ ๋๋๊ทธ ๊ฐ์ฒด ์ ์ธ
        // draggableId๋ string์ด์ด์ผ ํ๋ค.
        <Draggable draggableId={toDoId + ""} index={index}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging} // ๐ ๋๋๊ทธ ์ค์ธ์ง ํ๋ณ
                    ref={magic.innerRef} // ๐ ๋๋๊ทธ ๊ฐ์ฒด ์ง์ 
                    {...magic.dragHandleProps}
                    {...magic.draggableProps}
                >
                    {toDoText}
                </Card>
            )}
        </Draggable>
    );
};

const Card = styled.div<{ isDragging: boolean }>`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px;
    background-color: ${(props) => (props.isDragging ? "#e4f2ff" : props.theme.cardColor)};
    box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none")};
`;

export default React.memo(DraggableCard);
// ๐
// Droppable, Board, DragDropContext ๋ฑ ๋ถ๋ชจ State๊ฐ ๋ฐ๋๋ฉด ๋ชจ๋  children๋ค๊น์ง ๋ชจ๋ refresh ๋๋ค.
// ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง์ด ๋ฐ์ํ์ง ์๊ธฐ ์ํด์ Component์ props๊ฐ ๋ณํ์ง ์์ผ๋ฉด ๋ฆฌ๋ ๋๋ง์ ์ํค์ง ์๋ memo๋ฅผ ์ฌ์ฉํ๋ค.
