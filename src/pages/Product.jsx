import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    margin: 0px 0px 20px 0px;

`
const FilterContainer = styled.div`
    width:50%;
    margin: 20px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin: 0px 10px;
    padding: 5px;
`
const FilterSizeOpt = styled.option``

const FilterFormat = styled.select`
    margin: 0px 10px;
    padding: 5px;
`
const FilterFormatOpt = styled.option`
`

const AddContainer = styled.div`
    width:50%
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid #7E57C2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #7E57C2;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
    margin: 20px 0px 0px 0px;
    
`





const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/thRGX0w/pexels-ruvim-3560044.jpg"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Pinky Clouds</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                <Price>1 TL</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="pink"/>
                        <FilterColor color="purple"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Format</FilterTitle>
                        <FilterFormat>
                            <FilterFormatOpt> APNG (.apng)</FilterFormatOpt>
                            <FilterFormatOpt> AVIF (.avif)</FilterFormatOpt>
                            <FilterFormatOpt> GIF (.gif) </FilterFormatOpt>
                            <FilterFormatOpt> JPEG (.jpg, .jpeg, .jfif, .pjpeg, .pjp)</FilterFormatOpt>
                            <FilterFormatOpt> PNG (.png)</FilterFormatOpt>
                            <FilterFormatOpt> SVG (.svg)</FilterFormatOpt>
                            <FilterFormatOpt> WebP (.webp)</FilterFormatOpt>
                        </FilterFormat>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOpt> 3*5 inches (900*1500 pixels)</FilterSizeOpt>
                            <FilterSizeOpt> 4*6 inches (1200*1800 pixels)</FilterSizeOpt>
                            <FilterSizeOpt> 5*7 inches (1500*2100 pixels)</FilterSizeOpt>
                            <FilterSizeOpt> 8*8 inches (2400*2400 pixels)</FilterSizeOpt>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
