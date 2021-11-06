import styled from "styled-components";
import media from "styled-media-query";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
${media.greaterThan('large')`
padding: 0 20rem 0 20rem;`}
`;