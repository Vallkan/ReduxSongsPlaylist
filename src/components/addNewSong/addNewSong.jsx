import React, {Component} from 'react';
import PropTypes from "prop-types";


export class AddNewSong extends Component {
    static propTypes = {
        addSong: PropTypes.func.isRequired,
    };

    addSong = () => {
        const id = Math.round(Math.random() * 1000);
        let name = window.prompt('Song name');
        let duration = parseInt(window.prompt('Duration'));
        console.log(typeof duration);
        duration > 0 ? this.props.addSong(id, name, duration) : alert('duration must be number') ;
    };

    render() {
        return(
            <div className="add_song">
                <button onClick={this.addSong}>+</button>
            </div>
        )
    }
}
