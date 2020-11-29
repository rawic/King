import useOutsideClick from 'hooks/useOutsideClick'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'

import { DropdownList, DropdownMenu, DropdownWrapper } from './Dropdown.styles'
import Option from './Option/Option'

const OptionWrapper = ({ children }, ...props) => <li {...props}>{children}</li>
OptionWrapper.displayName = 'OptionWrapper'

OptionWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

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
    React.Children.map(children, (item, key) => {
      if (item.type.displayName === 'OptionWrapper') {
        return (
          <Option key={key} changeSelected={changeSelected} value={item.props.value}>
            {item.props.children}
          </Option>
        )
      }
    })

  return (
    <DropdownWrapper ref={wrapperRef} className={className}>
      <div onClick={toggleDropdown}>{trigger}</div>

      {opened && (
        <DropdownMenu data-testid="dropdown">
          <DropdownList>{renderMenu()}</DropdownList>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  )
}

Dropdown2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  trigger: PropTypes.object,
  open: PropTypes.bool
}

Dropdown2.Option = OptionWrapper

export default Dropdown2
