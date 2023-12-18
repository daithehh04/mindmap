'use client';
import { ReactFlowProvider } from 'reactflow';
import AddNodeOnEdgeDrop from './AddNodeOnEdgeDrop';

function Flow({ id }) {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop id={id} />
    </ReactFlowProvider>
  );
}

export default Flow;
