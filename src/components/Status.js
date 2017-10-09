import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import ContentWrapper from './Content'
import { Link } from 'react-router-dom'

const DetailsLink = styled(Link)`
  color: #777777;
`

const StatusWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5em;
`

const StatusFooter = styled.footer`
  font-size: .75em;
  color: #777777;
  align-self: flex-end;
`

class Status extends Component {
  static propTypes = {
    status: PropTypes.object.isRequired
  }

  render () {
    const { status } = this.props
    const readableDate = moment(status.time).format('HH:mm DD.MM.YYYY')

    return (
      <ContentWrapper>
        <StatusWrapper>
          {status.text}
          <br />
          <StatusFooter>
            <DetailsLink to={`/status/${status._id}`}>{readableDate}</DetailsLink>
          </StatusFooter>
        </StatusWrapper>
      </ContentWrapper>
    )
  }
}

export default Status
