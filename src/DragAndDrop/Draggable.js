import React from "react";
import PropTypes from "prop-types";
import { useDraggable } from "./hooks";

function Draggable(props) {
  const { eventHandlers } = useDraggable(props);

  return (
    <div {...eventHandlers} draggable={true}>
      {props.children}
    </div>
  );
}

const { string } = PropTypes;

Draggable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  style: PropTypes.oneOfType([string, PropTypes.oneOf([false])]),
  type: PropTypes.string
};

Draggable.defaultProps = {
  disabled: false,
  onDragEnd: noop,
  onDragStart: noop
};

function noop() {}

export default Draggable;
