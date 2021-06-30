
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import './style.css';
import styled from "styled-components"

const Title = styled.h1`
display: block;
  width: 18rem;
  margin: 4rem auto;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #65c3ba;
  border: 1px solid #65c3ba;
`;

function App() {
  return (
    <div>
      <Title>Hello Everybody</Title>
      <FullName />
      <ProfilePhoto />
      <Address />
    </div>
  );
}

export default App;
