import './App.css';
import {useEffect,useState,useRef} from 'react';
import axios from 'axios';
import { IUser } from './interfaces';
import UserList from './components/UserList';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import { useAppSelector, useAppDispatch } from './redux/hooks'
import styled from 'styled-components';
import { useDebouncedEffect } from './hooks/useDebounceEffect';

import { setShowPosts } from './redux/appSlice';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

const Container = styled.div<{ active?: boolean }>`
    position: relative;
    margin: 20px auto;
    width: 80%;
    height: 70%;
    display: grid;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    grid-column-gap: 30px;
    grid-row-gap: 30px; 
    transition: all ease 500ms;
    ${({ active }) => !active && `
      grid-template-columns: auto;
      width: 50%;
    `}
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 1240px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 780px) {
      width: 50%;
      justify-content: center;
      justify-items: center;
    }
`;

const App = () => {
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState<IUser[]>([]);
  const [sortUsers, setSortedUsers] = useState<IUser[]>(users);

  const showPosts = useAppSelector(state => state.app.showPosts);
  const selectedUserId = useAppSelector(state => state.app.userId);
  const searchQuery = useAppSelector(state => state.app.searchQuery);
  const containerRef = useRef(null);
  const [start, setStart] = useState(4);

  const limit = 4;
  
 const handleSort = ()=>{
    setSortedUsers(users.sort((a,b) => (a.name < b.name ? -1 : 1)));
  }

  const fetchUsers = async (url: string)=> {
    try {
      const res = await axios.get(url);
      setUsers(res.data);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchUsers(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
  },[])
  
  const handlePagination = async (direction: string) => {
    dispatch(setShowPosts(false));
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const count = res.data.length;

    if (direction == "left"){
      if (start >= limit){
        setStart(prev => prev - limit);
      }
    } else {
      if ((start + limit) < count){
        setStart(prev => prev + limit);
      }
    }

    fetchUsers(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`);
  }
  const handleSearch = async ()=> {
    fetchUsers(`https://jsonplaceholder.typicode.com/users?q=${searchQuery}&_limit=${limit}`)
  }
  useDebouncedEffect(() => {
    if (searchQuery.trim() !== ""){
      handleSearch();
    } else {
      fetchUsers(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    }
  }, [searchQuery], 500);


  return (
      <div className="App">
        <Header handleSort={handleSort}/>
         <Container active={showPosts}>           
               <UserList users={users}/>
                <Box 
                sx={{
                  display: showPosts ? 'flex' : 'none',
                }}
                ref={containerRef}>
                  <Slide direction="left" in={showPosts} container={containerRef.current}>
                    <Box>
                    <PostList user={selectedUserId} show={showPosts}/>
                    </Box>
                  </Slide>
                </Box>
             
          </Container>
        <Footer handlePagination={handlePagination}/>
      </div>
  );
}

export default App;
