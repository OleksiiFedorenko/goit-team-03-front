import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BoardsContainer = styled.div`
  margin-bottom: 40px;
`;

export const BoardsTitle = styled.p`
  font-size: 12px;
  padding-left: 24px;
  margin-bottom: 8px;
  color: #ffffff;
  opacity: 50%;
`;

export const CreateBoardWrapper = styled.div`
  margin-bottom: 40px;
  width: 210px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 0px 24px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff10;
  border-right: 0px;
  border-left: 0px;
`;

export const CreateBoardTitle = styled.p`
  font-size: 14px;
  margin-right: 96px;
  line-height: 20px;
`;

export const CreateBoardButton = styled.button`
  width: 40px;
  height: 36px;
  background-color: #bedbb0;
  border-radius: 10%;
  border: 0px none;
`;

export const BoardsWrapper = styled.div``;

export const BoardsList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
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
