import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

export const NewsItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 0 1.25rem 0;
  border-bottom: 2px solid #cecece;
`;

export const NewsContent = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  width: calc(100% - 10rem);
  height: 3rem;
  color: #444;
  font-size: 1rem;
  text-decoration: none;
`;
