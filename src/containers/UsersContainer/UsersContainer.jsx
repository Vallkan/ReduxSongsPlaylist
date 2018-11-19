import React, {Component} from 'react';
import {requestUsers } from "../../actions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class UsersContainer extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        requestUsers: PropTypes.func.isRequired,
        requestUsersSuccess: PropTypes.func,
    };

    componentDidMount() {
        this.props.requestUsers();
    }

    render() {
        return (
            <div className="Users">
                <h2>Users List</h2>
                <div>
                    <ul>
                        {this.props.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        users: store.users,
    }),
    (dispatch) => ({
        requestUsers: () => dispatch(requestUsers()),
    })
)(UsersContainer)
