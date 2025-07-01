import React, { useEffect } from 'react';
import CreateRole from './create-role/CreateRole';
import UpdateRole from './update-role/UpdateRole';
import { StyledRolePanel } from './rolePanel.styles';
import DeleteRole from './delete-role/DeleteRole';


const RolePanel = () => {

    const [createRole, setCreateRole] = React.useState(false);
    const [editRole, setEditRole] = React.useState(false);
    const [deleteRole, setDeleteRole] = React.useState(false);

    useEffect(() => {
        switch (window.location.pathname) {
            case '/dashboard/roles/create-roles':
                setCreateRole(true);
                break;
            case '/dashboard/roles/edit-roles':
                setEditRole(true);
                break;
            case '/dashboard/roles/delete-roles':
                setDeleteRole(true);
                break;
            default:
                setCreateRole(false);
                setEditRole(false);
                setDeleteRole(false);
                break;
        }
    }, [window.location.pathname]);

    return (
        <StyledRolePanel>
            {
                createRole && (
                    <CreateRole/>
                )
            }
            {
                editRole && (
                    <UpdateRole/>
                )
            }
            {
                deleteRole && (
                    <DeleteRole />
                )
            }
        </StyledRolePanel>
    )
}; export default RolePanel;