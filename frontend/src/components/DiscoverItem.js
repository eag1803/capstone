import React from "react"


export function DiscoverItem({title, description, image}) {
    function navigateToProject() {
        // todo, this willl need the backend most likely
        console.log(`navigate`)
    }
    
    return <div className="discoverItem" onClick={navigateToProject}>
                <span className="discoverContent">
                    <img src={image}></img>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </span>
            </div>
}
