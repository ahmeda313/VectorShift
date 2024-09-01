// inputNode.js

import { Handle, useReactFlow } from 'reactflow';

export const GenericNodeWrapper = ({ id, children, title, handles=[] }) => {

  const {setNodes} = useReactFlow()

  function deleteNode(){
    setNodes(prevNodes=>{
      return prevNodes.filter(i=>i.id!==id)
    })
  }

  return (
    <div className='border rounded-lg border-white border-double text-white font-bold bg-[#1d0d45]'>
      <div className='flex justify-between bg-[#430a8b] rounded-t-lg'>
        <span className='text-2xl p-3'>{title}</span>
        <button className="mt-1 me-1 h-6" onClick={deleteNode}>❌</button>
      </div>
      <div className='flex flex-col gap-2 p-2 pt-5'>
            {children}
      </div>
      {handles.map((handle,i)=>{
        console.log(handle.content)

    return <Handle
            key={i+`${id}-handle`}
            type={handle.type}
            position={handle.position}
            id={`${id}-value`}
            style={{
              width: 10,
              height: 10,
              background: "white",
              border: "1px solid white",
              ...handle.style
            }}
            className={handle.content?`pseudo-element text-sm font-thin`:undefined}
            data-content={handle.content || ''}
          />
  })}
    </div>
  );
}
