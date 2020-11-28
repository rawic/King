import useOutsideClick from 'hooks/useOutsideClick'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'

import { StyledDropdown, StyledDropdownWrapper, StyledList } from './Dropdown.styles'
import Option from './Option/Option'

const OptionWrapper = ({ children }, ...props) => <li {...props}>{children}</li>
OptionWrapper.displayName = 'OptionWrapper'

OptionWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

function Dropdown2({ children, defaultValue, onChange, trigger }) {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(null)

  const wrapperRef = useRef(null)
  const TriggerElement = trigger

  useEffect(() => {
    setOpened(false)
  }, [selected])

  useOutsideClick(wrapperRef, () => setOpened(false))

  const toggleDropdown = () => {
    setOpened((prevState) => !prevState)
  }

  const changeSelected = (value) => {
    setSelected(value)
    onChange(value)
  }

  const renderMenu = () =>
    React.Children.map(children, (item, key) => {
      console.log(item.displayName)
      if (item.displayName === 'Option') {
        return (
          <Option key={key} changeSelected={changeSelected} value={item.props.value}>
            {item.props.children}
          </Option>
        )
      }
    })

  return (
    <StyledDropdownWrapper ref={wrapperRef}>
      <TriggerElement onClick={toggleDropdown} isOpened={opened} layout>
        {selected || defaultValue}
      </TriggerElement>

      {opened && (
        <StyledDropdown data-testid="dropdown">
          <StyledList>{renderMenu()}</StyledList>
        </StyledDropdown>
      )}
    </StyledDropdownWrapper>
  )
}
Dropdown2.Option = OptionWrapper

// DropDown2.Trigger =

Dropdown2.propTypes = {
  defaultValue: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  trigger: PropTypes.func.isRequired
}

export default Dropdown2
