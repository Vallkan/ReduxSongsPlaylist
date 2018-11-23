import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import connect from "react-redux/es/connect/connect";
import {postNewAlbum} from "../../actions";

const validate = values => {
    const errors = {};

    if(!values.text) {
        errors.text = 'Поле обязательно для заполнения!';
    }

    return errors
};
class NewAlbum extends Component {
    static propTypes = {};

    handleSubmit = (values) => {
        console.log('submitted!');
        console.log(values);
        this.props.postNewAlbum(values);
    };

    render() {
        return (
            <div>
                <h1>new Album component</h1>
                <form onSubmit={() => this.handleSubmit}>
                    <div>
                        <label>Owner Id</label>
                        <Field name="ownerId" component="input" type="text"/>
                        <label>Title</label>
                        <Field name="title" component="input" type="text"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

connect(
    null,
    (dispatch) => ({
        postNewAlbum: (album) => dispatch(postNewAlbum(album)),
    })
)(NewAlbum);

NewAlbum = reduxForm({
    form: 'new album',
    destroyOnUnmount: false,
    validate,
})(NewAlbum);
export default NewAlbum;

connect(
    null,
    (dispatch) => ({
        postNewAlbum: (album) => dispatch(postNewAlbum(album)),
    })
)(NewAlbum);