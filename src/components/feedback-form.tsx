'use client'

import { useState } from 'react'
import { Input, Textarea, Button, Spacer } from '@nextui-org/react'
import { z } from 'zod'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  feedback: z.string().min(1, 'Feedback is required'),
})

type FeedbackFormData = z.infer<typeof feedbackSchema>

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    feedback: '',
  })
  const [errors, setErrors] = useState<Partial<FeedbackFormData>>({})
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = feedbackSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Partial<FeedbackFormData> = {}
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof FeedbackFormData] = error.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccessMessage('Feedback sent successfully! Thank you!')
        setFormData({ name: '', email: '', feedback: '' })
        setErrors({})
      } else {
        throw new Error('Failed to submit feedback')
      }
    } catch (error) {
      console.error(error)
    }

    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        name="name"
        isInvalid={!!errors.name}
        errorMessage={errors.name}
        fullWidth
      />
      <Spacer y={3} />
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        isInvalid={!!errors.email}
        errorMessage={errors.email}
        fullWidth
      />
      <Spacer y={3} />
      <Textarea
        label="Feedback"
        placeholder="Enter your feedback"
        value={formData.feedback}
        onChange={handleChange}
        name="feedback"
        isInvalid={!!errors.feedback}
        errorMessage={errors.feedback}
        fullWidth
      />
      <Spacer y={4} />
      <Button type="submit" color="primary" className="w-28">
        Submit
      </Button>
      <Spacer y={2} />
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  )
}

export default FeedbackForm
