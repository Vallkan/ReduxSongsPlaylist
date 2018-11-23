import React, {Component} from 'react';
import {requestUsers } from "../../actions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class UsersContainer extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        requestUsers: PropTypes.func.isRequired,
        isLoadingUsers: PropTypes.bool.isRequired,
        requestUsersSuccess: PropTypes.func,
    };

    componentDidMount() {
        this.props.requestUsers();
    }

    getUsers() {
        if (this.props.isLoadingUsers === false) {
            return <ul>
                {this.props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        }

        if (this.props.isLoadingUsers === 'error') {
            return <div><h3>При загрузке данных произошла ошибка! Попробуйте еще раз</h3>
                <button onClick={() => this.props.requestUsers()}>Загрузить еще раз</button></div>
        }

        if (this.props.isLoadingUsers === 'loading' || true) {
            return <div><h3>Загрузка...</h3>
                <button onClick={() => this.props.requestUsers()}>Загрузить еще раз</button></div>
        }
    }

    render() {
        return (
            <div className="Users">
                <h2>Users List</h2>
                <div>
                    {this.getUsers()}
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        users: store.usersTab.users,
        isLoadingUsers: store.usersTab.isLoadingUsers,
    }),
    (dispatch) => ({
        requestUsers: () => dispatch(requestUsers()),
    })
)(UsersContainer)

