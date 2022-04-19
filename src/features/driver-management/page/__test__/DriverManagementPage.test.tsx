import React from 'react'
import { render, waitFor, fireEvent, renderHook } from 'utils/test-utils'
import DriverManagementPage from '../DriverManagementPage'
import '@testing-library/jest-dom'

describe('Testing DriverManagementPage', () => {
  it('should be rendered properly', async () => {
    const { findByText } = render(<DriverManagementPage />)
    const text = await findByText('DRIVER MANAGEMENT')
    expect(text).toBeInTheDocument()
  })
})
