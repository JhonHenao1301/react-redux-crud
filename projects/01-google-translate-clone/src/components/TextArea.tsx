import { Form } from 'react-bootstrap'
import { type SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

export const TextArea = ({ loading, type, value, onChange }: Props) => {
  return (
    <Form.Control
        as='textarea'
        placeholder='Translate'
        style={{ height: '150px' }}
    />
  )
}
