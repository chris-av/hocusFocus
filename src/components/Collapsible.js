

export default function Collapsible(props) {
  

    const { key, name, description, isExpanded, updateTask, setCurrentTaskId} = props



    function handleSubmit(event) {
        event.preventDefault()
        updateTask(event)
    }

    function handleEdit(event) {
        setCurrentTaskId(key)
        updateTask(event)
       

    }


    return (
      
           isExpanded ? 
                <div className = "form-container">
                    < form className = "form" >
                        <input
                            type="text"
                            placeholder="What are you working on?"
                            className="form-input"
                            name="name"
                            // value={name}
                            onChange={(event) => updateTask(event)}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="form-input"
                            name="description"
                            // value={description}
                            onChange={(event) => updateTask(event) }
                        />
                        <div>
                            <button name="isExpanded" onClick = {handleSubmit}>Save</button>
                            <button>Delete</button>
                        </div>
                    </form >
                </div >
            :
                <div className="task--container">
                    <div className="task-info">
                        <div>{name}</div>
                        <div>{description}</div>
                    </div>
                    
                    <button name="isExpanded" onClick={handleEdit}>Edit</button>
                    
                </div>
           
        
    )
}
