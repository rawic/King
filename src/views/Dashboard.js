import Button from 'components/atoms/Button/Button'
import Heading from 'components/atoms/Heading/Heading'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import BalanceCard from 'components/molecules/BalanceCard/BalanceCard'
import Search from 'components/molecules/Search/Search'
import TransactionsList from 'components/molecules/TransactionsList/TransactionsList'
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
  margin-left: auto;
  max-width: 420px;
  width: 100%;
`

const StyledBalanceCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`

const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.7rem;
  border-bottom: 1px solid #f2faff;
  position: relative;
`

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.highlight};
  }
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
  static propTypes = {
    incomes: PropTypes.object.isRequired,
    outcomes: PropTypes.object.isRequired,
    saved: PropTypes.object.isRequired
  }

  render() {
    const { incomes, outcomes, saved, total } = this.props

    return (
      <>
        <StyledHeaderWrapper>
          <Header title={title} />
          <StyledInput icon="search" placeholder="Search transactions..." search />
        </StyledHeaderWrapper>

        <StyledBalanceCards>
          <BalanceCard balance={incomes} type="incomes"></BalanceCard>
          <BalanceCard balance={outcomes} type="outcomes"></BalanceCard>
          <BalanceCard balance={saved} type="saved"></BalanceCard>
        </StyledBalanceCards>

        <SectionHeader>
          <SectionTitle>Today</SectionTitle>
          <Button icon="angle-right">New transaction</Button>
        </SectionHeader>

        <TransactionsList total={total} />
      </>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    incomes: state.balance.incomes,
    outcomes: state.balance.outcomes,
    saved: state.balance.saved,
    search: state.search.value,
    total: state.balance.total
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
