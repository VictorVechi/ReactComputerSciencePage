import React, { useEffect, useState } from 'react';
import { StyledUserPanel } from './userPanel.styles';
import CreateUser from './create-user/CreateUser';

const UserPanel = () => {

    const [createUser, setCreateUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    useEffect(() => {
        switch (window.location.pathname) {
            case '/dashboard/user/create-user':
                setCreateUser(true);
                break;
            case '/dashboard/user/edit-user':
                setEditUser(true);
                break;
            case '/dashboard/user/delete-user':
                setDeleteUser(true);
                break;
            default:
                setCreateUser(false);
                setEditUser(false);
                setDeleteUser(false);
                break;
        }
    }, [window.location.pathname]);

    return (
        <StyledUserPanel>
            {
                createUser && (
                    <CreateUser/>
                )
            }
            {
                editUser && (
                    <div>
                    </div>
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