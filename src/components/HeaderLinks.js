import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderLink = styled(Link)`
  color: #dcdcdc;
  text-decoration: none;
  margin-right: .5em;
  &:last-child {
    margin-right: 0;
  }
`

export default HeaderLink
