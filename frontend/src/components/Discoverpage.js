import React from "react"
import { DiscoverItem } from "./DiscoverItem"


export function Discoverpage({}) {
    const testItems = [
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'},
        {'title': 'title', 'description': 'desc', 'img': 'https://picsum.photos/150/100'}
]
    const discoverItems = []

    function buildDiscoverItems() {
        let i = 0;
        for(const [index, item] of testItems.entries()) {
            discoverItems.push(<DiscoverItem title={item.title} description={item.description} image={item.img} key={index}/>)
        }
        return discoverItems
    }


    return <div className="discoverList">{buildDiscoverItems()}</div>
}
