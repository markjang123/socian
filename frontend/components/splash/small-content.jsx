import React from 'react';
import SmallContentItem from './small_content_item'
import {Link} from 'react-router-dom'
class SmallContent extends React.Component {
    render() {
        return (
            <div className="small-content">
                <Link to="/users/2/albums/6">
                    <SmallContentItem subtitle="FEATURE" title="Teenage Engineering: Opbox Sensors and Shoes, OP-1 Drums and MIDI Sync" imageUrl={window.small_image_2}/>
                </Link>
                <Link to="/users/3/albums/4">
                    <SmallContentItem subtitle="FEATURE" title="Beach House’s Bloom was one of the best-reviewed albums of 2012, earning placement on over 40 “Best Albums of the Year” lists" imageUrl={window.small_image_1}/>
                </Link>
                <Link to="users/4/albums/1">
                    <SmallContentItem subtitle="FEATURE" title="Autumn Hymnal: The Story of Fleet Foxes’ ‘Shore,’ Their Stunning Surprise-Drop New Album" imageUrl={window.small_image_3}/>
                </Link>
            </div>
        )
    }
}

export default SmallContent;