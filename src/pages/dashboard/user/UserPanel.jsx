import React, { useEffect, useState } from 'react';
import { StyledUserPanel } from './userPanel.styles';
import CreateUser from './create-user/CreateUser';
import EditUserInfo from './edit-user/edit-user-info/EditUserInfo';
import EditUserPw from './edit-user/edit-user-pass/EditUserPw';

const UserPanel = () => {

    const [createUser, setCreateUser] = useState(false);
    const [editUserInfo, setEditUserInfo] = useState(false);
    const [editUserPass, setEditUserPass] = useState(false);
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
            case '/dashboard/user/delete-user':
                setDeleteUser(true);
                break;
            default:
                setCreateUser(false);
                setEditUserInfo(false);
                setEditUserPass(false);
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
                deleteUser && (
                    <div>
                    </div>
                )
            }
        </StyledUserPanel>
    )
}; export default UserPanel;