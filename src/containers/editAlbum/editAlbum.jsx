import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {editAlbum } from "../../actions";
import PropTypes from "prop-types";
import FormComponent from "../../components/formComponent/formComponent";

const validate = values => {
    const errors = {};

    if(!values.text) {
        errors.text = 'Поле обязательно для заполнения!';
    }

    return errors
};

class EditAlbum extends Component {
    static propTypes = {
        editAlbum: PropTypes.func.isRequired,
    };


    componentDidMount() {
        let albumId = parseInt(this.props.match.params.number, 10);
        console.log(albumId);
    }

    render() {
        return (
            <div>
                <h1>Edit Album</h1>
                <FormComponent albumId={parseInt(this.props.match.params.number, 10)} onSubmit={this.props.editAlbum}/>
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        editAlbum: (album) => dispatch(editAlbum(album)),
    })
)(EditAlbum);