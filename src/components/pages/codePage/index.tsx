import React, { useRef } from 'react'

export default function COdePage() {
    const codeInputRef = useRef<any>("");
   

    const executeInputCode = () =>{
        const code = {
            "line1" : "codeInputRef.current.value"
        }
        try{
           return JSON.parse('{"line1":"codeInputRef.current.value"}')
        }
        catch(err){
            return console.log(err)
        } 
    }
    console.log(typeof codeInputRef.current.value,"ttt");
  return (
    <div>
            <textarea name="codeArea" ref={codeInputRef}>
            </textarea>
            <button onClick={()=> executeInputCode()}>Run</button>
        
    </div>
  )
}
