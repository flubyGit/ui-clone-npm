import React from 'react'
import { Container } from './styled'
import { GoMarkGithub } from 'react-icons/go'
import { IoLogoNpm } from 'react-icons/io'

export default function Warning() {
  return (
    <Container>
      <i>
        <IoLogoNpm color="#fff" size={40} />
      </i>
      <span>
        <strong>npm</strong> is a now a part of <strong>GitHub</strong>
      </span>
      <i>
        <GoMarkGithub size={30} color="#fff"/>
      </i>
    </Container>
  )
}
