export default function Notesform(){
    const save = function(event){
        console.log(event)
    }
    const update = (event)=>{
        console.log(event.target.value);
    }
    return(
    <div>
    <h6>hello this is note</h6>
    <input onChange={update} />
    <button onClick={save}>save</button>
    </div>)
    
}