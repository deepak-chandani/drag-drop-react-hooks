import React, { useRef, useState } from "react";
import cn from "classnames";
import Draggable from "../DragAndDrop/Draggable";
import Droppable from "../DragAndDrop/Droppable";
import "./TeamMembers.css";
import { DragDropTypes } from "../constants";
import useDragAndDropContext from "../DragAndDrop/hooks/useDragAndDropContext";

function TeamMembers({ teamId, members, ...props }) {
  const [isHoveringDropzone, setIsHoveringDropzone] = useState(false);
  const dragCounter = useRef(0);
  const { dragItemData } = useDragAndDropContext();

  // fires when a dragged item enters a valid drop target
  const onDragEnter = (e) => {
    e.preventDefault(); // needed for IE
    dragCounter.current++;

    // does item being dragged, belongs to same team
    if (dragItemData.teamId === teamId) {
      return;
    }

    setIsHoveringDropzone(true);
  };

  // fires when a dragged item leaves a valid drop target.
  const onDragLeave = (e) => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsHoveringDropzone(false);
    }
  };

  const onDrop = (data, e) => {
    dragCounter.current = 0;
    setIsHoveringDropzone(false);

    props.onDrop(data, teamId);
  };

  return (
    <div className="team-wrapper">
      <Droppable
        acceptedTypes={DragDropTypes.CARD}
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        className={cn("droppable", {
          hovering: isHoveringDropzone
        })}
      >
        <h2>
          {teamId} ({members.length})
        </h2>
        {isHoveringDropzone && <p className="drop-here">Drop here</p>}
        <ul className="characters">
          {members.map((member, index) => {
            return (
              <Draggable
                key={member.id}
                type={DragDropTypes.CARD}
                data={member}
                onDragStart={(e) => console.log("onDragStart", e)}
              >
                <li key={member.id}>
                  <div className="characters-thumb">
                    <img src={member.thumb} alt={`${member.name} Thumb`} />
                  </div>
                  <p>{member.name}</p>
                </li>
              </Draggable>
            );
          })}
        </ul>
      </Droppable>
    </div>
  );
}

export default TeamMembers;
