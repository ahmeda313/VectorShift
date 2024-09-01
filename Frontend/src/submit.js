// submit.js
import { shallow } from 'zustand/shallow';
import { useStore } from './store';


const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
  });

  function submitPipeline(e,obj){
        e.preventDefault()
        
        const nodes = obj.nodes.map(i=>({...i.data}))
        const edges = obj.edges.map(i=>({
            id:i.id,
            source:i.source,
            sourceHandle:i.sourceHandle,
            target:i.target,
            targetHandle:i.targetHandle
        }))

        console.log(nodes)
        console.log(edges)

        fetch("http://localhost:8000/pipelines/parse",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({pipeline:{nodes,edges}})
        }).then(resData=>resData.json())
        .then(res=>{
            console.log(res)
        })
  }

  
  export const SubmitButton = () => {

    const {
      nodes,
      edges,
    } = useStore(selector, shallow);

    return (
        <div className="mt-3 flex justify-center" >
            <button type="submit" onClick={(e)=>submitPipeline(e,{nodes,edges})} className="bg-gradient-to-r from-[#461591] to-[#1e7ad6] text-white text-2xl font-bold p-3 px-5 rounded-md">Submit</button>
        </div>
    );
}
