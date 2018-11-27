import React, {Component} from 'react';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import FormComponent from "../../components/formComponent/formComponent";
import {postNewAlbum} from "../../actions";

class NewAlbum extends Component {
    static propTypes = {
        postNewAlbum: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                <h1>new Album component</h1>
                <FormComponent onSubmit={this.props.postNewAlbum}/>
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        postNewAlbum: (album) => dispatch(postNewAlbum(album)),
    })
)(NewAlbum);
