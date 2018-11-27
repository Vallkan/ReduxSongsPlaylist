import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';

const validate = values => {
    const errors = {};

    if(!values.text) {
        errors.text = 'Поле обязательно для заполнения!';
    }

    return errors
};

class FormComponent extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(data => {
                if(this.props.albumId) {
                    data['id'] = this.props.albumId;
                    console.log(data);
                }

                this.props.handleSubmit();
            })}>
                <div className="form-wrapper">
                    <label>Owner Id</label>
                    <Field name="ownerId" component="input" type="text"/>
                    <br/>
                    <label>Title</label>
                    <Field name="title" component="input" type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'new album',
    validate,
})(FormComponent);