import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'components/atoms/Badge/Badge'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import React from 'react'
import styled from 'styled-components'
import { filterAmount } from 'utilities'

// import { handleFilterChange } from './utils'

const StyledWrapper = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3.7rem;
`

const StyledCategoryIconCircle = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 1px solid hsl(0, 0%, 92.2%);
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.07);
  box-sizing: border-box;
  color: ${({ color }) => color};
  display: flex;
  font-size: 2.4rem;
  height: 4.8rem;
  justify-content: center;
  margin-right: 1.6rem;
  width: 4.8rem;
`

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  line-height: 1.35;
  max-width: 330px;
  width: 100%;
`

const StyledHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const StyledTime = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.s};
`

const StyledClock = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 1rem;
`

const StyledBadge = styled(Badge)`
  border-radius: 1.2rem;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
  width: 95px;
`

const StyledArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;

  &:focus {
    color: ${({ theme }) => theme.tertiary};
    outline: none;
  }
`

const StyledTotalAmount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

export const searchFilterOptions = [
  { label: 'Edit', value: 'edit', icon: { name: 'pen', color: '#3160FF' } },
  { label: 'Remove', value: 'remove', icon: { name: 'trash', color: '#FF4883' } }
]

const ActionButton = ({ handleDropdownClick }) => (
  <StyledArrowButton onClick={handleDropdownClick}>
    <FontAwesomeIcon icon="angle-down" />
  </StyledArrowButton>
)

const Created = ({ time }) => (
  <StyledTime>
    <StyledClock icon={['far', 'clock']} />
    {time}
  </StyledTime>
)

const Transaction = ({ transaction, total }) => {
  const { amount, category, time, title, type } = transaction
  const { color, icon, name } = category

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledCategoryIconCircle color={color}>
          <FontAwesomeIcon icon={icon} />
        </StyledCategoryIconCircle>

        <div>
          <StyledHeading>{title}</StyledHeading>
          <Paragraph big>{name}</Paragraph>
        </div>
      </StyledHeader>

      <StyledBadge type={type} transaction>
        {filterAmount(amount, true)}
      </StyledBadge>

      <Created time={time} />

      <StyledTotalAmount>{filterAmount(total, false, ' ')}</StyledTotalAmount>

      <Dropdown
        content=""
        trigger={ActionButton}
        options={searchFilterOptions}
        onChange={() => ''}
      />
    </StyledWrapper>
  )
}

export default Transaction
