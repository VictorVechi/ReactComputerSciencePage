import React, { useEffect } from 'react';
import CreateRole from './create-role/CreateRole';
import UpdateRole from './update-role/create-role/UpdateRole';
import { StyledRolePanel } from './rolePanel.styles';


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
            case '/dashboard/roles/delete-role':
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
                    <div>
                        <h2>Excluir Papel</h2>
                        <form>
                            <input type="text" placeholder="Nome do Papel" />
                            <button type="submit">Excluir</button>
                        </form>
                    </div>
                )
            }
        </StyledRolePanel>
    )
}; export default RolePanel;