import Heading from 'components/atoms/Heading/Heading'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import BalanceCard from 'components/molecules/BalanceCard/BalanceCard'
import Modal from 'components/molecules/Modal/Modal'
import Search from 'components/molecules/Search/Search'
import AddTransaction from 'components/molecules/Transaction/AddTransaction/AddTransaction'
import Transactions from 'components/organisms/Transactions/Transactions'
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

const titles = ['King', 'Prince', 'Princess', 'Queen']
const title = titles[Math.floor(Math.random() * titles.length)]

const Header = React.memo(({ title }) => {
  return (
    <div>
      <Heading>Dashboard</Heading>
      <Paragraph big>
        <StyledWelcome>
          <span role="img" aria-label="Hand wave" style={{ fontSize: '24px' }}>
            👋
          </span>{' '}
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
    const { incomes, outcomes, saved } = this.props

    return (
      <>
        <StyledHeaderWrapper>
          <Header title={title} />
          <StyledInput icon="search" placeholder="Search transactions..." search />
        </StyledHeaderWrapper>

        <StyledBalanceCards>
          <BalanceCard balance={incomes} type="incomes">
            Balance up by
          </BalanceCard>
          <BalanceCard balance={outcomes} type="outcomes">
            Balance down by
          </BalanceCard>
          <BalanceCard balance={saved} type="saved">
            Saved up by
          </BalanceCard>
        </StyledBalanceCards>

        <Transactions />

        <Modal title="Add new transaction">
          <AddTransaction></AddTransaction>
        </Modal>
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
    search: state.search.value
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
