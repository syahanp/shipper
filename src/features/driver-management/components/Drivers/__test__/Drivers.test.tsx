import React from 'react'
import { render, waitFor, fireEvent, renderHook } from 'utils/test-utils'
import Drivers from '../Drivers'
import '@testing-library/jest-dom'
import { DriversContextState } from 'features/driver-management/providers/DriversProvider'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const contextState = {
  inputValue: '',
  currentPage: 1,
  totalPage: 1,
  drivers: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Maksymilian',
        last: 'Robstad',
      },
      location: {
        street: {
          number: 3945,
          name: 'Åsaveien',
        },
        city: 'Aksdal',
        state: 'Oppland',
        country: 'Norway',
        postcode: '7416',
        coordinates: {
          latitude: '-33.5574',
          longitude: '-157.0416',
        },
        timezone: {
          offset: '-10:00',
          description: 'Hawaii',
        },
      },
      email: 'maksymilian.robstad@example.com',
      login: {
        uuid: 'dc338999-d011-4efd-93ea-42e405110b09',
        username: 'lazygorilla621',
        password: 'marvin',
        salt: 'YVRU1WAx',
        md5: '6fc20e6696520669d8d53f5de11c3eef',
        sha1: '7d0b60fa0314f840ef2403078378b558af7c2c2a',
        sha256: 'f6f817d18067353b469bf568a5d686415f8a00b5ca34f5fb27bacd843347c6d6',
      },
      dob: {
        date: '1980-10-21T21:50:50.622Z',
        age: 42,
      },
      registered: {
        date: '2016-02-12T09:47:29.080Z',
        age: 6,
      },
      phone: '22072488',
      cell: '95288772',
      id: {
        name: 'FN',
        value: '21108004158',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/47.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/47.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/47.jpg',
      },
      nat: 'NO',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Mehmet',
        last: 'Erbulak',
      },
      location: {
        street: {
          number: 4331,
          name: 'Istiklal Cd',
        },
        city: 'Tunceli',
        state: 'Ankara',
        country: 'Turkey',
        postcode: 78703,
        coordinates: {
          latitude: '73.1200',
          longitude: '-142.9160',
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska',
        },
      },
      email: 'mehmet.erbulak@example.com',
      login: {
        uuid: '3d44e600-8ae0-4205-869a-16f085ccbcdc',
        username: 'beautifulduck907',
        password: 'weird',
        salt: 'KfwFU9MZ',
        md5: '9af0e70cda5466e2a812b7ade0f9a0d3',
        sha1: '2b49c674918ec48a7febe17b6aebf6cbfd67c2ff',
        sha256: '612bb1de725093687d798239ad84410a7b77ebc2efb40cdc471cf58d3975725e',
      },
      dob: {
        date: '1992-10-14T13:31:05.401Z',
        age: 30,
      },
      registered: {
        date: '2004-01-18T20:59:23.677Z',
        age: 18,
      },
      phone: '(324)-001-8473',
      cell: '(915)-876-2092',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/50.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/50.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      },
      nat: 'TR',
    },
  ],
  isLoading: false,
  hasPreviousPage: false,
  hasNextPage: false,
}

const driversResponse = rest.get('https://randomuser.me/api', (req, res, ctx) => {
  return res(ctx.json({ results: contextState.drivers }))
})

const handler = [driversResponse]

const server = setupServer(...handler)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing Drivers Component', () => {
  it('list of drivers rendered properly', async () => {
    const { findByText } = render(
      <DriversContextState.Provider value={contextState}>
        <Drivers />
      </DriversContextState.Provider>
    )
    const text = await findByText('Mehmet')
    expect(text).toBeInTheDocument()
  })
})
