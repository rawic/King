import { useState } from 'react'

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleModal = (content = false) => {
    setIsModalOpen(!isModalOpen)

    if (content) {
      setModalContent(content)
    }
  }

  return { isModalOpen, handleModal, modalContent }
}
