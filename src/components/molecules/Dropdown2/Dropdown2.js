import useOutsideClick from 'hooks/useOutsideClick'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'

import { DropdownList, DropdownMenu, DropdownWrapper } from './Dropdown.styles'
import Option from './Option/Option'
import OptionWrapper from './OptionWrapper/OptionWrapper'

function Dropdown2({ className, children, onChange, trigger, open }) {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(null)

  const wrapperRef = useRef(null)

  useEffect(() => {
    if (open) return setOpened(true)

    setOpened(false)
  }, [selected, open])

  useOutsideClick(wrapperRef, () => toggleDropdown())

  const toggleDropdown = () => {
    if (open) return
    setOpened((prevState) => !prevState)
  }

  const changeSelected = (value) => {
    setSelected(value)
    onChange(value)
  }

  const renderMenu = () =>
    React.Children.map(children, ({ props, type }, key) => {
      if (type.displayName === 'OptionWrapper') {
        return (
          <Option
            key={key}
            changeSelected={changeSelected}
            value={props.value}
            isSelected={props.value === selected}
          >
            {props.children}
          </Option>
        )
      }
    })

  return (
    <DropdownWrapper ref={wrapperRef} className={className}>
      <div onClick={toggleDropdown}>{trigger || 'trigger'}</div>

      {(open || opened) && (
        <DropdownMenu data-testid="dropdown">
          <SimpleBar style={{ maxHeight: 300 }} autoHide={false}>
            <DropdownList>{renderMenu()}</DropdownList>
          </SimpleBar>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  )
}

Dropdown2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  trigger: PropTypes.object,
  open: PropTypes.bool
}

Dropdown2.Option = OptionWrapper

export default Dropdown2
