// llmNode.js

import { Position } from 'reactflow';
import { GenericNodeWrapper } from './GenericNodeWrapper';

export const NewLLMNode = ({ id, data }) => {

    const handles = data.handles || [
        {type:"target",position:Position.Left,id:`${id}-system`,style:{top: `${100/3}%`}},
        {type:"target",position:Position.Left,id:`${id}-prompt`,style:{top: `${200/3}%`}},
        {type:"source",position:Position.Right,id:`${id}-response`}
    ]

  return (
<GenericNodeWrapper id={id} title="LLM" handles={handles}>
    <span>This is a LLM.</span>
</GenericNodeWrapper>

  );
}
