import Link from "next/link";
import { SuccessContainer, ImageContainer } from "./styles";

export default function Success(){
  return(
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Moisés Neto</strong>, sua <strong>Camiseta Beyond the Limits</strong> está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}