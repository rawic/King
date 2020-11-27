import ListItemAvatar from 'components/atoms/IconCircle/IconCircle'
import ListItemText from 'components/atoms/Paragraph/Paragraph'
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.35;
`

const ListItemContent = styled.div``

const ListItemHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`

export { ListItemWrapper, ListItemAvatar, ListItemContent, ListItemHeading, ListItemText }
