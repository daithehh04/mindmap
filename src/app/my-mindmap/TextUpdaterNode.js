'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data, isConnectable, ...rest }) {
  // const [value, setValue] = useState(data.value);
  const [isClicked, setIsClicked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const { setNodes } = useReactFlow();

  const refNode = useRef(null);
  const onDoubleClick = () => {
    setEditing(true);
  };
  const onChange = useCallback(
    (evt) => {
      const { id } = rest;
      setNodes((nodes) => {
        return nodes.map((node) => {
          if (node.id === id) {
            node.data.value = evt.target.value;
          }
          return node;
        });
      });
    },
    [rest, setNodes]
  );
  const onBlur = () => {
    setEditing(false);
  };
  const handleClick = () => {
    setIsClicked(true);
  };
  const handleOutsideClick = (e) => {
    if (refNode.current && !refNode.current.contains(e.target)) {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={refNode}
      className={`text-updater-node ${isClicked && 'clicked'}`}
      onDoubleClick={onDoubleClick}
      onClick={handleClick}
    >
      <Handle type="target" position={Position.Top} />
      <div className="node-item">
        {isEditing ? (
          <input
            id="text"
            name="text"
            onChange={onChange}
            onBlur={onBlur}
            className="nodrag"
            value={data.value}
          />
        ) : (
          <span>{data.value}</span>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}
