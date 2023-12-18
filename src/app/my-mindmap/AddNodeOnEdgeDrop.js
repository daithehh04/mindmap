'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './TextUpdaterNode.js';
import useSWR from 'swr';
import { fetcher } from '~/utils/fetcher.js';
import { useDataMindmap } from '../context/DataProvider.js';
import Loading from '~/components/Loading.js';
const api = process.env.NEXT_PUBLIC_API;
const nodeTypes = { textUpdater: TextUpdaterNode };
const initialNodes = [
  {
    id: '0',
    type: 'textUpdater',
    data: { label: 'My mindmap' },
    position: { x: 0, y: 0 },
  },
];

const AddNodeOnEdgeDrop = ({ id }) => {
  const {
    data: mindmap,
    error,
    isLoading,
  } = useSWR(`${api}/mindmaps/${id}`, fetcher);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [selectedIdNode, setSelectedIdNode] = useState(null);
  const [selectedIdEdge, setSelectedIdEdge] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    mindmap?.nodes || initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(mindmap?.edges || []);

  const getId = useCallback(() => `${nodes.length++}`, [nodes]);

  const { screenToFlowPosition } = useReactFlow();
  const { setDataMindmap } = useDataMindmap();

  useEffect(() => {
    setNodes(mindmap?.nodes || initialNodes);
    setEdges(mindmap?.edges || []);
  }, [mindmap, setNodes, setEdges]);
  useEffect(() => {
    setDataMindmap({
      nodes,
      edges,
    });
  }, [nodes, edges, setDataMindmap]);

  const onConnect = useCallback(
    (params) => {
      // reset the start node on connections
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { value: `Node ${id}` },
          origin: [0.5, 0.0],
          type: 'textUpdater',
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition, setEdges, setNodes, getId]
  );

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Delete' && selectedIdNode && selectedIdNode !== '0') {
        setNodes((nodes) => nodes.filter((node) => node.id !== selectedIdNode));
      }
      if (e.key === 'Delete' && selectedIdEdge) {
        setEdges((edges) => edges.filter((edge) => edge.id !== selectedIdEdge));
      }
    });
  }, [selectedIdNode, setNodes, selectedIdEdge, setEdges]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loading />
      </div>
    );
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => {
          setSelectedIdNode(node.id);
        }}
        onEdgeClick={(_, edge) => {
          setSelectedIdEdge(edge.id);
        }}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Background />
        <MiniMap nodeColor={nodeColor} />
        <Controls />
      </ReactFlow>
    </div>
  );
};
function nodeColor(node) {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';
  }
}

export default AddNodeOnEdgeDrop;
