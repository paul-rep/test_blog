import  {UserListProps} from '../interfaces';
import { FC } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';



const UserListContainer = styled.div`
    display:grid;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    grid-auto-rows: min-content;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <UserListContainer>
            {users.map(user => <UserCard user={user} key={user.id}></UserCard>)}
        </UserListContainer>
    )
}

export default UserList;
