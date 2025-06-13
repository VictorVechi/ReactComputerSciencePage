import React, { useEffect, useState } from 'react';
import { StyledUserPanel } from './userPanel.styles';
import CreateUser from './create-user/CreateUser';
import EditUserInfo from './edit-user/edit-user-info/EditUserInfo';
import EditUserPw from './edit-user/edit-user-pass/EditUserPw';
import DeleteUser from './delete-user/DeleteUser';
import ListUsers from './list-users/ListUsers';

const UserPanel = () => {

    const [createUser, setCreateUser] = useState(false);
    const [editUserInfo, setEditUserInfo] = useState(false);
    const [editUserPass, setEditUserPass] = useState(false);
    const [editOtherUser, setEditOtherUser] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    useEffect(() => {
        switch (location.pathname) {
            case '/dashboard/user/create-user':
                setCreateUser(true);
                break;
            case '/dashboard/user/edit-user-info':
                setEditUserInfo(true);
                break;
            case '/dashboard/user/edit-user-password':
                setEditUserPass(true);
                break;
            case '/dashboard/user/edit-other':
                setEditOtherUser(true)
                break;
            case '/dashboard/user/delete-user':
                setDeleteUser(true);
                break;
            default:
                setCreateUser(false);
                setEditUserInfo(false);
                setEditUserPass(false);
                setEditOtherUser(false);
                setDeleteUser(false);
                break;
        }
    }, [location.pathname]);

    return (
        <StyledUserPanel>
            {
                createUser && (
                    <CreateUser />
                )
            }
            {
                editUserInfo && (
                    <EditUserInfo />
                )
            }
            {
                editUserPass && (
                    <EditUserPw />
                )
            }
            {
                editOtherUser && (
                    <ListUsers />
                )
            }
            {
                deleteUser && (
                    <DeleteUser />
                )
            }
        </StyledUserPanel>
    )
}; export default UserPanel;