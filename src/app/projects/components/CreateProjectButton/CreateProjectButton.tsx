'use client'

import { Add } from '@mui/icons-material'
import { LoadingButton, LoadingButtonProps } from '@mui/lab'
import { useState } from 'react'

export const CreateProjectButton = (props: LoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingButton
      {...props}
      loading={isLoading}
      startIcon={<Add />}
      variant="contained"
    >
      Create Project
    </LoadingButton>
  )
}
