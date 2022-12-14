import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const DeleteBox = () => {
    return (
        <Droppable droppableId="trash">
            {(magic, info) => (
                <Area
                    isDraggingOver={info.isDraggingOver} // π λλκ·Έ μΆλ° μ§μ 
                    isDraggingFromThis={Boolean(info.draggingFromThisWith)} // π λλκ·Έ λμ°© μμ μ§μ 
                    ref={magic.innerRef} // π λλκ·Έ κ³΅κ° μ§μ 
                    {...magic.droppableProps}
                >
                    {magic.placeholder}
                </Area>
            )}
        </Droppable>
    );
};

export default DeleteBox;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver ? "#636e72" : props.isDraggingFromThis ? "" : "transparent"};
    /* flex-grow: 1; // π λλκ·Έ κ³΅κ° νμ₯ */
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
    width: 300px;
    height: 70px;
    border: 5px solid white;
    border-radius: 30px;
`;
