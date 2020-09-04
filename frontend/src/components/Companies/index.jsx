import React from 'react'
import { Container } from './styled'
import company from '../../assets/images/companies.png'
export default function Companies() {
  return (

  <Container>
    <h2>Gratefully serving everyone from solo devs to the Fortune 500</h2>
      <figure>
        <img src={company} alt="Imagem ilustrativa de empresas que utilizam o npm"/>
      </figure>
  </Container>
  )
}
