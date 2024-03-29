import { GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react"
import Head from "next/head"

import { HomeContainer, Product } from "./home/styles";
import { stripe } from "@/lib/stripe";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product href={`/product/${product.id}`} key={product.id} prefetch={false}  className="keen-slider__slide">
              <Image 
                src={product.imageUrl} 
                width={520} 
                height={480} 
                alt=""
                placeholder="blur"
                blurDataURL={product.imageUrl} 
              />
  
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
           </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      urL: product.url,
      price: new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount! / 100)
    }
  })
  
  return{
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
} 