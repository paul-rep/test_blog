import React from 'react';
import  {IUserProps} from '../interfaces';
import styled from 'styled-components';
import { useAppDispatch } from '../redux/hooks'
import { selectUser,setShowPosts } from '../redux/appSlice';

const UserCardContainer = styled.div`
    background-color: #333348;
    border-radius: 40px;
    color: #EEEEEE;
    padding: 50px 50px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    text-align: center;
`;

const Button = styled.button`
    background-color: #52519D;
    border-radius: 40px;
    font-weight: 600;
    color: #EEEEEE;
    padding: 20px 44px;
    border: none;
    cursor: pointer;
    transition: all ease .6s;
    white-space: nowrap;
    &:hover {
        background-color: #12122D;
        transform: scale(1.05);
    }
`;

const UserCard: React.FC<IUserProps> = ({user}) => {
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        dispatch(selectUser(user.id));
        dispatch(setShowPosts(true));
    }
    return (
        <UserCardContainer>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <Button onClick={handleClick}>
                View all posts
            </Button>
        </UserCardContainer>
    )
}

export default UserCard;
