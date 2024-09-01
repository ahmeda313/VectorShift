// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { GenericNodeWrapper } from './GenericNodeWrapper';

export const NewOutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };
  const handles = data.handles || [{type:"target",position:Position.Left,id:`${id}-value`}]

  return (
    <GenericNodeWrapper id={id} title="Output" handles={handles}>
            <label>
            Name:
            <input 
                type="text" 
                value={currName} 
                onChange={handleNameChange} 
                className='p-1 ms-2 border-slate-200 rounded-sm font-medium text-black'
            />
            </label>
            <label>
            Type:
            <select value={outputType} onChange={handleTypeChange} className='p-1 ms-4 border-slate-200 rounded-sm font-medium text-black'>
                <option value="Text">Text</option>
                <option value="File">Image</option>
            </select>
            </label>
    </GenericNodeWrapper>


  );
}
