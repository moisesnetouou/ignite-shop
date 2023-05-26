import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "./styles"

export default function Product(){
  const {query} = useRouter()

  return(
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati beatae voluptatibus temporibus doloribus iure dicta quod numquam culpa, eligendi labore corporis inventore eius magni expedita doloremque, quibusdam voluptatem. Temporibus!</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}