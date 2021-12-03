import React from 'react'
import styled  from 'styled-components';
import {useEffect,useState} from 'react';
import axios from 'axios';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Container = styled.div`
 overflow-y: hidden;
`;
const PostListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #333348;
    border-radius: 40px;
`;


const PostList = ({show,user}) => {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    useEffect(()=>{
        try {
            const fetchPosts = async ()=> {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user}`);
                setPosts(res.data);
                return res.data;
              }
            fetchPosts();
        }catch(e){
            console.log(e);
        }
      },[user]);

    if (show) {
        return (
            <Container>
            <PostListContainer>
            {posts.map(p => 
                <Accordion key={p.id} expanded={expanded === `panel${p.id}`} onChange={handleChange(`panel${p.id}`)}
                sx={{
                    backgroundColor: "#333348",
                    color: "#EEE",
                    paddingBottom: "5px"
                }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id={`panel${p.id}a-header`}
                    
                    >
                    <Typography>{p.title.charAt(0).toUpperCase() + p.title.slice(1)}</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {p.body}
                    </Typography>
                </AccordionDetails>
                </Accordion>
            )}
            </PostListContainer>
            </Container>
        )
    } else {
        return null;
    }
    
}

export default PostList;
