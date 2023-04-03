import React, { useState } from "react"; 
import { DiscoverItem } from "./DiscoverItem"


export function Discoverpage({charities, setCharity, handlePageChange}) {
//     const testItems = [
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
//         {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'}
// ]
    const demoImage = 'https://picsum.photos/150/100'
    const discoverItems = []
    const [selectedIndex,setIndex] = useState(0);

    function buildDiscoverItems() {
        let i = 0;
        for(const [index, item] of charities.entries()) {
            if(item.img){
                discoverItems.push(<DiscoverItem title={item.title} description={item.description} image={item.img} key={index} index={index}/>)
            } else {
                discoverItems.push(<DiscoverItem title={'item.title'} description={'item.description'} image={demoImage} key={index} index={index} handleNavigate={(value)=>{setIndex(value); handleNavigate()}}/>)
            }
        }
        return discoverItems
    }
    function handleNavigate() {
        // todo, this willl need the backend most likely
        setCharity(selectedIndex);
        // handlePageChange('Project');
    }


    return <div className="discoverList">{buildDiscoverItems()}</div>
}
