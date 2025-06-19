import { useState } from "react"

export const CollapseItem =  ({question, response}) =>{

    const [isOpen, setIsOpen] = useState(false);

    return (
       <div className={`collapse-item ${isOpen ? 'active' : ''}`}>
            <div className="title">
                <h1>{question}</h1>
                <i className="fa-solid fa-chevron-down" onClick={() => setIsOpen(!isOpen)}></i>
            </div>         
            
            {isOpen && 
                <div className="description">
                    <h2>{response}</h2>
                </div>
            }
       </div>
    )
}