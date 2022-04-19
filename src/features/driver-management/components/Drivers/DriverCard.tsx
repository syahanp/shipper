import Text from 'components/Text'
import WhiteSpace from 'components/WhiteSpace'
import Image from 'next/image'
import { useGlobalState } from 'provider/GlobalProvider'
import React from 'react'
import { MoreHorizontal } from 'react-feather'
import styled, { useTheme } from 'styled-components'
import formatDate from 'utils/date'

interface Props {
  avatar: string
  name: string
  phone: string
  email: string
  birth_date: string
}

/**
 * Individual driver card item
 */
const DriverCard: React.FC<Props> = ({ name, phone, email, birth_date, avatar }) => {
  const { color } = useTheme()
  const { isMobileScreen } = useGlobalState()

  return (
    <DriverCardLayout isMobile={isMobileScreen}>
      <div className="driver__id">
        <Text type="caption" color="gray300">
          Driver ID <span style={{ color: color.primary }}> 2819726D1 </span>
        </Text>

        <MoreHorizontal size={18} color={color.gray300} />
      </div>

      <div className="driver__bio">
        <div className="driver__bio_avatar">
          <Image
            src={avatar ?? '/images/user.svg'}
            alt="shipper"
            layout="fill"
            priority
          />
        </div>

        <WhiteSpace size="lg" />

        <div className="driver__bio_section">
          <div className="driver__bio_section_item">
            <Text type="caption" color="gray300">
              Nama Driver
            </Text>
            <Text>{name}</Text>
          </div>

          <WhiteSpace size="md" />

          <div className="driver__bio_section_item">
            <Text type="caption" color="gray300">
              Telepon
            </Text>
            <Text>{phone}</Text>
          </div>

          {!isMobileScreen && (
            <>
              <WhiteSpace size="md" />

              <div className="driver__bio_section_item">
                <Text type="caption" color="gray300">
                  Email
                </Text>
                <Text>{email}</Text>
              </div>

              <WhiteSpace size="md" />

              <div className="driver__bio_section_item">
                <Text type="caption" color="gray300">
                  Tanggal Lahir
                </Text>
                <Text>{formatDate(new Date(birth_date), 'dd MMMM yyyy')}</Text>
              </div>
            </>
          )}
        </div>
      </div>
    </DriverCardLayout>
  )
}

export default DriverCard

const DriverCardLayout = styled.div<{ isMobile: boolean }>`
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  min-width: 320px;
  max-width: 500px;
  margin-right: 2rem;

  .driver__id {
    padding: 1rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray300}`};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .driver__bio {
    padding: 1.5rem 1rem;
    display: ${(props) => (props.isMobile ? 'flex' : 'block')};
    align-items: center;
    gap: 12px;

    .driver__bio_avatar {
      position: relative;
      height: ${(props) => (props.isMobile ? '120px' : '80px')};
      aspect-ratio: 1;

      img {
        border-radius: 100%;
        border: ${({ theme }) => `1px solid ${theme.color.gray100}`};
      }
    }

    .driver__bio_section {
    }
  }
`
