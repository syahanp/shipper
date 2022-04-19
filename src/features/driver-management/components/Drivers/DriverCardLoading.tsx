import SkeletonLoading from 'components/SkeletonLoading'
import WhiteSpace from 'components/WhiteSpace'
import { useGlobalState } from 'provider/GlobalProvider'
import React from 'react'
import { MoreHorizontal } from 'react-feather'
import styled, { useTheme } from 'styled-components'
/**
 * Individual driver card item
 */
const DriverCardLoading = () => {
  const { color } = useTheme()
  const { isMobileScreen } = useGlobalState()

  return (
    <DriverCardLoadingLayout isMobile={isMobileScreen}>
      <div className="driver__id">
        <SkeletonLoading width={120} height={11} />

        <MoreHorizontal size={18} color={color.gray300} />
      </div>

      <div className="driver__bio">
        {isMobileScreen ? (
          <SkeletonLoading width={120} height={120} style={{ borderRadius: 50 }} />
        ) : (
          <SkeletonLoading width={80} height={80} style={{ borderRadius: 50 }} />
        )}

        <WhiteSpace size="lg" />

        <div className="driver__bio_section">
          <div className="driver__bio_section_item">
            <SkeletonLoading width={60} height={12} />
            <SkeletonLoading width={180} height={20} />
          </div>

          <WhiteSpace size="md" />

          <div className="driver__bio_section_item">
            <SkeletonLoading width={60} height={12} />
            <SkeletonLoading width={180} height={20} />
          </div>

          {!isMobileScreen && (
            <>
              <WhiteSpace size="md" />

              <div className="driver__bio_section_item">
                <SkeletonLoading width={60} height={12} />
                <SkeletonLoading width={180} height={20} />
              </div>

              <WhiteSpace size="md" />

              <div className="driver__bio_section_item">
                <SkeletonLoading width={60} height={12} />
                <SkeletonLoading width={180} height={20} />
              </div>
            </>
          )}
        </div>
      </div>
    </DriverCardLoadingLayout>
  )
}

export default DriverCardLoading

const DriverCardLoadingLayout = styled.div<{ isMobile: boolean }>`
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

    .driver__bio_section_item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }
`
