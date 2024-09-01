// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { GenericNodeWrapper } from './GenericNodeWrapper';

export const NewTextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [handles, setHandles] = useState(data?.handles || [{type:"source",position:Position.Right,id:`${id}-output`}])

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    // to adjust height
    e.target.style.height = 'auto'; 
    e.target.style.height = e.target.scrollHeight + 'px';

    //to add handles on left corresponding to variables in text
    const allText = e.target.value

    let variables = allText.split("{{").filter((k,i)=>i!==0 && k.includes("}}")).map(i=>i.split("}}")[0])

    // console.log(variables)

    if(variables.length>0){

        const newHandles = variables.map((i,index)=>({
                type:"target",
                position:Position.Left,
                id:`${id}-input`,
                style:{top:`${(index+1)*100/(variables.length+1)}%`},
                content:i
        }))

        // console.log(newHandles)

    
            setHandles(_=>([
                ...newHandles,
                {type:"source",position:Position.Right,id:`${id}-output`}   
            ]))

    }else{
        setHandles(_=>[{type:"source",position:Position.Right,id:`${id}-output`}])
    }
  };

  

  return (
        <GenericNodeWrapper id={id} title="Text" handles={handles}>
            <label className='flex flex-wrap'>
            <span>
            Text : 
            </span>
            <textarea 
                type="text" 
                value={currText} 
                onChange={handleTextChange} 
                className='p-1 ms-2 border-slate-200 rounded-sm font-medium text-black overscroll-hidden overflow-hidden'
            ></textarea>
            </label>
        </GenericNodeWrapper>
  );
}
