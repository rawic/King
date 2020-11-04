import { useState } from 'react'

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState()

  const handleModal = (content = false) => {
    setIsModalOpen(false)

    if (content) {
      setModalContent(content)
    }
  }

  return { isModalOpen, handleModal, modalContent }
}
