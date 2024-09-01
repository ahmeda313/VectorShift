// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { GenericNodeWrapper } from './GenericNodeWrapper';

export const NewInputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  const handles = data.handles || [{type:"source",position:Position.Right,id:`${id}-value`}]

  return (
      <GenericNodeWrapper id={id} title="Input" handles={handles}>
        <label>
          Name : 
          <input
            type="text"
            value={currName}
            onChange={handleNameChange} 
            className='p-1 ms-2 border-slate-200 rounded-sm font-medium text-black'
            />
        </label>
        <label>
          Type :
          <select value={inputType} onChange={handleTypeChange} className='p-1 ms-4 border-slate-200 rounded-sm font-medium text-black'>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
    </GenericNodeWrapper>
  );
}
