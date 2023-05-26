import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from "@/assets/logo.svg"
import { Container, Header } from './styles'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
