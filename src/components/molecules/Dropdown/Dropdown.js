import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import ReactPerformance from 'react-performance'
import styled from 'styled-components'

import Option from './Option'
import { closeDropdown } from './utils/'

const StyledDropdown = styled.div`
  background-color: white;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.4rem hsla(0, 0%, 0%, 0.08);
  margin-top: 6px;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${({ theme }) => theme.zindex.dropdown};
`

const StyledList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.xs};
  list-style-type: none;
  min-width: 150px;
`

const StyledDropdownWrapper = styled.div`
  position: relative;
`

class Dropdown extends PureComponent {
  static propTypes = {
    content: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    trigger: PropTypes.func.isRequired
  }

  state = {
    opened: false,
    options: this.props.options,
    selected: null
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  changeSelected = (value) => () => {
    this.setState(closeDropdown)

    if (value === this.state.selected) return

    this.setState({
      selected: value
    })

    this.props.onChange(value)
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState(closeDropdown)
    }
  }

  renderOption = (option) => {
    let value = option.value
    const icon = option.icon
    if (typeof value === 'undefined') {
      value = option.label || option
    }
    const label = option.label || option.value || option
    const isSelected = value === this.state.selected

    return (
      <Option
        key={value}
        changeSelected={this.changeSelected}
        testId={`dropdown-option-${value}`}
        isSelected={isSelected}
        icon={icon}
      >
        {label}
      </Option>
    )
  }

  toggleDropdown = () => {
    ReactPerformance.startRecording()
    this.setState((state) => ({
      opened: !state.opened
    }))
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  render() {
    const TriggerElement = this.props.trigger
    const { opened, options, selected } = this.state
    const { content } = this.props

    return (
      <StyledDropdownWrapper ref={this.setWrapperRef}>
        <TriggerElement handleDropdownClick={this.toggleDropdown} isOpened={opened}>
          {selected || content}
        </TriggerElement>

        {opened && (
          <StyledDropdown data-testid="dropdown">
            <StyledList>{options.map((option) => this.renderOption(option))}</StyledList>
          </StyledDropdown>
        )}
      </StyledDropdownWrapper>
    )
  }
}

export default ReactPerformance.measure({
  getId: 'Dropdown',
  Component: Dropdown,
  isCollapsed: false
})
