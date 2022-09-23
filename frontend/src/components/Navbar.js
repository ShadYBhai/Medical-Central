import styled from 'styled-components'


const Navbar = () => {

    return(
        <Container>
            <Wrapper>
                <Left>MEDICALCENTRAL</Left>
                <Center>Cart</Center>
                <Right>SignUp/LogIn</Right>
            </Wrapper>
        </Container>
    )

}

const Container = styled.div`
    height: 4rem;
    background-color: #57d0d0;

`
const Wrapper = styled.div`
    padding:1rem 2rem;
    display: flex;
    justify-content: space-between;
`
const Right = styled.div`
margin-top: 0.4rem;
margin-right: 2rem;

`
const Left = styled.div`
margin-top: 0.4rem;
flex-grow: 1;
`
const Center = styled.div`
margin-top: 0.4rem;
margin-right: 2rem;
`

export default Navbar