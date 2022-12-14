import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { ITodo } from "../atoms";

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            {/* π λλκ·Έ κ³΅κ° μ μΈ */}
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area // λλκ·Έ κ³΅κ° μμ±
                        isDraggingOver={info.isDraggingOver} // π λλκ·Έ μΆλ° μ§μ 
                        isDraggingFromThis={Boolean(info.draggingFromThisWith)} // π λλκ·Έ λμ°© μμ μ§μ 
                        ref={magic.innerRef} // π λλκ·Έ κ³΅κ° μ§μ 
                        {...magic.droppableProps}
                    >
                        {toDos.map((toDo, index) => (
                            <DraggableCard
                                key={toDo.id} // π λλκ·Ένλ©΄ λ³νλ μμΉ κ°μ
                                index={index}
                                toDoId={toDo.id}
                                toDoText={toDo.text}
                            />
                        ))}
                        {magic.placeholder}
                        {/* π λλκ·Ένλ λμ λλκ·Έ μμΉ λ§λ ¨νκΈ° μν κ³΅κ° */}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver ? "#74b9ff" : props.isDraggingFromThis ? "#fab1a0" : "transparent"};
    flex-grow: 1; // π λλκ·Έ κ³΅κ° νμ₯
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

export default Board;
