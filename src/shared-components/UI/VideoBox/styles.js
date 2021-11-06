import styled from "styled-components";

export const VideoContainer = styled.div`
margin: 1rem;
display: flex;
flex-direction: column;`
export const VideoBoxContainer = styled.div`
display: flex;
flex-direction: column;
width: 8rem;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
.video-cover,.video-component,video,.poster-.video-cover,.posterimage,.postericon {
    width: 8rem;
    height: 8rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
.picon {
    text-align: center;
    font-size: 1.2rem;
    padding: 0.8rem 0.8rem 0.8rem 0.9rem;
    border-radius: 10em;
    transform: translateY(20px);
    background-color: black;
    opacity: 0.45;
}

`
export const VideoBoxDescription = styled.div`
background: #f5f5f5;
font-size: 1rem;
color: black;
border-bottom-right-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
padding: .5rem 0;
width: 8rem;
`
export const IconsContainer = styled.div`
font-size: 0.85rem;
margin-top: .5rem;
display: flex;
svg:first-child {
    color: red;
}
svg:nth-child(2) {
    margin-left: .4rem;
    color: green;
}
`