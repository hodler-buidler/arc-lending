import { FC } from 'react';
import styled from 'styled-components'

interface BorrowDetailsProps {
  currentLTVRatio: number;
  maxLTVRatio: number;
  ethPriceUSD: number;
}

const BorrowDetails: FC<BorrowDetailsProps> = (props) => {
  return (
    <DetailsWrapperStyled>
      <DetailStyled className="detail">
        <div>
          <span className="text-small">Current LTV Ratio</span>
        </div>

        <div>
          <span className="text-small text-alternative">
            {props.currentLTVRatio}%
          </span>
        </div>
      </DetailStyled>
      
      <DetailStyled className="detail">
        <div>
          <span className="text-small">Maximum LTV Ratio</span>
        </div>

        <div>
          <span className="text-small text-alternative">
            {props.maxLTVRatio}%
          </span>
        </div>
      </DetailStyled>

      <DetailStyled className="detail">
        <div>
          <span className="text-small">ETH Price</span>
        </div>

        <div>
          <span className="text-small text-alternative">
            ${ props.ethPriceUSD } USD
          </span>
        </div>
      </DetailStyled>
    </DetailsWrapperStyled>
  );
}

const DetailsWrapperStyled = styled.div`
  & .detail {
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DetailStyled = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
`;

export default BorrowDetails;
