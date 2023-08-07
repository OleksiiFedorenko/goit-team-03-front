import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BoardsWrapper = styled.div``;

export const BoardsList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 40px;
`;

export const BoardsItem = styled.li`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  color: #ffffff;
  background-color: ${props => (props.active ? '#1F1F1F' : 'transparent')};
`;

export const BoardInfo = styled.div`
  padding: 20px 24px 20px 24px;
`;
