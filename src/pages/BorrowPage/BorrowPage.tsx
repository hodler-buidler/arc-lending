import { FC } from 'react';
import styled from 'styled-components';
import TheBorrowInterface from '@components/borrow/TheBorrowInterface/TheBorrowInterface';

const Page: FC = () => {
  return (
    <BorrowPageWrapperStyled>
      <div className="borrow-page-content">
        <div>
          <div className="heading-3">
            <span className="text-alternative">ETH</span> / USD
          </div>
          <div>
            <span>Deposit WETH to a vault, and mint ARCx stablecoins.</span>
          </div>
        </div>

        <div className="borrow-page-content__interface">
          <TheBorrowInterface />
        </div>
      </div>
    </BorrowPageWrapperStyled>
  ); 
}

const BorrowPageWrapperStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .borrow-page-content {
    &__interface {
      margin-top: 35px;
    }
  }
`;

export default Page;