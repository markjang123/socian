import React from 'react';
import SmallContentItem from './small_content_item'
import {Link} from 'react-router-dom'
class SmallContent extends React.Component {
    render() {
        return (
            <div className="small-content">
                <Link to="/users/2/albums/6">
                    <SmallContentItem subtitle="FEATURE" title="Teenage Engineering: Opbox Sensors and Shoes, OP-1 Drums and MIDI Sync" imageUrl="https://i.ytimg.com/vi/qfnBmQUge3U/maxresdefault.jpg"/>
                </Link>
                <Link to="/users/3/albums/4">
                    <SmallContentItem subtitle="FEATURE" title="Beach House’s Bloom was one of the best-reviewed albums of 2012, earning placement on over 40 “Best Albums of the Year” lists" imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/72/Beach_House_at_House_of_Blues_San_Diego_on_July_1_2012.jpg"/>
                </Link>
                <Link to="users/4/albums/1">
                    <SmallContentItem subtitle="FEATURE" title="Autumn Hymnal: The Story of Fleet Foxes’ ‘Shore,’ Their Stunning Surprise-Drop New Album" imageUrl="https://twt-thumbs.washtimes.com/media/image/2020/09/23/fleet_foxes_music_review_shore_98557_c0-626-3000-2374_s561x327.jpg?17354878af72b1a4b32a9822298e3fdea89d952e"/>
                </Link>
            </div>
        )
    }
}

export default SmallContent;