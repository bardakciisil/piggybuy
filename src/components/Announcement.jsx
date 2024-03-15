import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: #7E57C2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 14px;
    font-weight:500;

`

const Announcement = () => {
  return (
    <Container>
        Each person is connected to a star. Let's create a network of stars by reaching others.
    </Container>
      
    
  )
}

export default Announcement
