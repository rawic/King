import { AnimatePresence, motion } from 'framer-motion'
import useOutsideClick from 'hooks/useOutsideClick'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

import { StyledDropdown, StyledDropdownWrapper, StyledList } from './Dropdown.styles'
import Option from './Option/Option'

function Dropdown({ content, onChange, options: optionsProps, trigger }) {
  const [opened, setOpened] = useState(false)
  const [options] = useState(optionsProps)
  const [selected, setSelected] = useState(null)

  const wrapperRef = useRef(null)

  const changeSelected = (value) => () => {
    setOpened(false)

    if (value === selected) return

    setSelected(value)
    onChange(value)
  }

  const renderOption = (option) => {
    let value = option.value
    const icon = option.icon
    if (typeof value === 'undefined') {
      value = option.label || option
    }
    const label = option.label || option.value || option
    const isSelected = value === selected

    return (
      <Option
        key={value}
        changeSelected={changeSelected}
        testId={`dropdown-option-${value}`}
        isSelected={isSelected}
        icon={icon}
      >
        {label}
      </Option>
    )
  }

  const toggleDropdown = () => {
    setOpened((prevState) => !prevState)
  }

  const TriggerElement = trigger

  useOutsideClick(wrapperRef, () => setOpened(false))

  return (
    <StyledDropdownWrapper ref={wrapperRef}>
      <TriggerElement handleDropdownClick={toggleDropdown} isOpened={opened} layout>
        <AnimatePresence exitBeforeEnter>
          <motion.span layout="position" key={selected || content} initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}>{selected || content}</motion.span>
        </AnimatePresence>
      </TriggerElement>

      {opened && (
        <StyledDropdown data-testid="dropdown">
          <StyledList>{options.map((option) => renderOption(option))}</StyledList>
        </StyledDropdown>
      )}
    </StyledDropdownWrapper>
  )
}

Dropdown.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  trigger: PropTypes.func.isRequired
}

export default Dropdown
