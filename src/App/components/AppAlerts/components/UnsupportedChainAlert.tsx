import { FC } from 'react';
import { UiAlert } from '@components/ui/index';
import { SUPPORTED_CHAINS } from '@config/wallets';

const UnsupportedChainAlert: FC = () => {
  return (
    <UiAlert theme="warning">
      Currently enabled chain is not supported, please use: &nbsp;
      {SUPPORTED_CHAINS.map((chain, index) => (
        <span key={index}>
          {index !== 0 && (<span>, &nbsp;</span>)}
          {chain.name}
        </span>
      ))}
    </UiAlert>
  );
}

export default UnsupportedChainAlert;