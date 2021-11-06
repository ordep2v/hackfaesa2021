import styled from "styled-components";

export const PostContainer = styled.section`
margin-top: 2.5rem;
display: flex;
flex-direction: column;
width: 100%;
`
export const PostLargeCard = styled.article`
max-width: 100%;
display: flex;
flex-direction: column;
padding: .8rem;
margin-top: 1rem;
border-radius: 0.5rem;
color: black;
background-color: #f5f5f5;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
svg {
    margin-top: .2rem;
    color: red;
    align-self: flex-end;
}
`
export const PostLargeCardText = styled.div`
max-width: 100%;
font-size: 1.2rem;
`