import React from "react"


export function DiscoverItem({title, description, image, index, handleNavigate}) {
    function navigateToProject() {
        handleNavigate(index);
    }
    
    return <div className="discoverItem" onClick={navigateToProject}>
                <span className="discoverContent">
                    <img src={image}></img>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </span>
            </div>
}
