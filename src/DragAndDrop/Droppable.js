import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDroppable } from "./hooks";

function Droppable(props) {
  const { onDragChange } = props;
  const { eventHandlers, isDragging } = useDroppable(props);

  // whenever isDragging is changed invoke onDropChange()
  useEffect(() => {
    onDragChange(isDragging);
  }, [isDragging, onDragChange]);

  return (
    <div
      className={props.className}
      style={props.style !== false && { ...props.style }}
      {...eventHandlers}
    >
      {props.children}
    </div>
  );
}

const { string, object, arrayOf, oneOf } = PropTypes;

Droppable.propTypes = {
  className: string,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func.isRequired,
  onDragChange: PropTypes.func,
  style: PropTypes.oneOfType([object, oneOf([false])]),
  acceptedTypes: PropTypes.oneOfType([string, arrayOf(string)])
};

Droppable.defaultProps = {
  onDragChange: noop,
  onDragEnter: noop,
  onDragLeave: noop,
  onDragOver: noop
};

export default Droppable;

function noop() {}
