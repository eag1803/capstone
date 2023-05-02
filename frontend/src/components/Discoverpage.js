import React from "react"; 
import { DiscoverItem } from "./DiscoverItem"


export function Discoverpage({charities, setCharity, handlePageChange}) {

    const demoImage = 'https://picsum.photos/150/100'
    const discoverItems = []

    function buildDiscoverItems() {
        for(const [index, item] of charities.entries()) {
            if(item.img){
                discoverItems.push(<DiscoverItem title={item.title} description={item.description} image={item.img} key={index} index={index}/>)
            } else {
                discoverItems.push(<DiscoverItem title={item.title} description={item.description} image={demoImage} key={index} index={index} handleNavigate={()=>{handleNavigate(index)}}/>)
            }
        }
        return discoverItems
    }
    function handleNavigate(index) {
        setCharity(index);
        handlePageChange('Project');
    }


    return <div className="discoverList">{buildDiscoverItems()}</div>
}
