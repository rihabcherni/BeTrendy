import React from 'react'
import { StyledTitleComp } from './TitleCompStyled'

export default function TitleComp(props) {
  return (
    <StyledTitleComp>{props.name}</StyledTitleComp>
  )
}