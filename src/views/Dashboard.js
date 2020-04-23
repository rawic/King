import Heading from 'components/atoms/Heading/Heading'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Search from 'components/molecules/Search/Search'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledWelcome = styled.span`
  color: ${({ theme }) => theme.highlight};
  display: inline-block;
  margin-top: 0.7rem;
`

const StyledTitle = styled.b`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

const StyledInput = styled(Search)`
  max-width: 420px;
  width: 100%;
  margin-left: auto;
`

const titles = ['King', 'Prince', 'Princess', 'Queen']
const title = titles[Math.floor(Math.random() * titles.length)]

const Header = React.memo(({ title }) => {
  return (
    <div>
      <Heading>Dashboard</Heading>
      <Paragraph big>
        <StyledWelcome>
          Hello, <StyledTitle>{title}</StyledTitle>
        </StyledWelcome>
        . Here’s general overview.
      </Paragraph>
    </div>
  )
})
class Dashboard extends React.PureComponent {
  state = {
    search: {
      filterBy: '',
      value: ''
    }
  }

  updateSearch = (filter) => {
    const search = { ...this.state.search }
    search.filterBy = filter
    this.setState({ search })
  }

  updateSearchInput = (e) => {
    const search = { ...this.state.search }
    search.value = e.target.value
    this.setState({ search })
  }

  render() {
    return (
      <StyledHeaderWrapper>
        <Header title={title} />
        <StyledInput icon="search" placeholder="Search transactions..." search />
      </StyledHeaderWrapper>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    search: state.search.value
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
