import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

export const InputSection = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const LoadingMessage = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  width: 80%;
  cursor: crosshair;
`;

export const Marker = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const CoordinatesList = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0;
`;

export const CoordinateItem = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const SaveButton = styled(Button)`
  margin-top: 10px;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;