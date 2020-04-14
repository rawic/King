import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPerformance from 'react-performance'
import Option from './Option'

const StyledDropdown = styled.div`
  background-color: white;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.4rem hsla(0, 0%, 0%, 0.08);
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 6px;
`

const StyledList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.xs};
  list-style-type: none;
  min-width: 150px;
  text-align: right;
`

class Dropdown extends PureComponent {
  static propTypes = {
    content: PropTypes.string,
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

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        opened: false
      })
    }
  }

  toggleDropdown = () => {
    ReactPerformance.startRecording()
    this.setState({
      opened: !this.state.opened
    })
  }

  changeSelected = (value) => () => {
    if (value === this.state.selected) {
      return
    }

    this.setState({
      opened: false,
      selected: value
    })
  }

  render() {
    const TriggerElement = this.props.trigger

    return (
      <div ref={this.setWrapperRef}>
        <TriggerElement handleDropdownClick={this.toggleDropdown}>
          {this.state.selected ? this.state.selected : this.props.content}
        </TriggerElement>

        {this.state.opened && (
          <StyledDropdown>
            <StyledList>
              {this.state.options.map((option, i) => (
                <Option key={i} changeSelected={this.changeSelected}>
                  {option}
                </Option>
              ))}
            </StyledList>
          </StyledDropdown>
        )}
      </div>
    )
  }
}

export default ReactPerformance.measure({
  getId: 'Dropdown',
  Component: Dropdown,
  isCollapsed: false
})
