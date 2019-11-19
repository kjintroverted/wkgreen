import styled from 'styled-components';

export const colors = {
  light: '#C4FAFB',
  primary: '#38DDE3',
  dark: '#10B1BC',
  darker: '#037885'
}

export const Spacer = styled.span`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: inherit;
  justify-content: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  background: inherit;
  align-items: center;
`

export const BarHeader = styled.h2`
  background: black;
  color: white;
  margin: 0px;
  padding-left: 10px;
  &.light {
    color: ${colors.light };
  }
  &.primary {
    color: ${colors.primary };
  }
  &.dark {
    color: ${colors.dark };
  }
  &.darker {
    color: ${colors.darker };
  }
`

export const Section = styled.section`
  min-height: 200px;
  background: white;
  &.light {
    background: ${colors.light };
  }
  &.primary {
    background: ${colors.primary };
  }
  &.dark {
    background: ${colors.dark };
  }
  &.darker {
    color: white;
    background: ${colors.darker };
  }
  & a {
    text-decoration: none;
    color: ${colors.primary };
  }
`

export const Card = styled.div`
  position: relative;
  max-width: 400px;
  background: white;
  box-shadow: lightgray 1px 1px 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  text-align: justify;
  overflow: auto;
  & p {
    padding: 10px;
  }
  &.flat {
    padding: 10px;
    box-shadow: none;
    border: black solid 2px;
    background: inherit;
    overflow: visible;
    & h3 {
      position: absolute;
      top: -33px;
      padding: 0px 5px;
      background: inherit;
    }
  }
  &.skinny {
    max-width: 350px;
  }
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: lightgray solid 1px;
  padding: 0px 5px;
  h3, p {
    text-align: left;
    margin: 0px;
  }
`

export const HeaderImg = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: white;
  &.red {
    background: red;
  }
  &.orange {
    background: orange;
  }
  &.yellow {
    background: yellow;
  }
  &.green {
    background: green;
  }
  &.blue {
    background: blue;
  }
  &.purple {
    background: purple;
  }
`