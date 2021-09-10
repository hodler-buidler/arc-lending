import { FC } from 'react';
import { UiAlert, UiLink } from '@components/ui/index';
import { getInstallableWallets } from '@utils/wallets';

const NoSupportedWalletsAlert: FC = () => {
  return (
    <UiAlert theme="danger">
      You don't have supported wallets installed. Please check out these: &nbsp;
      {getInstallableWallets().map((wallet, index) => (
        <span key={index}>
          {index !== 0 && (<span>, &nbsp;</span>)}

          <UiLink
            to={wallet.installLink}
            theme="info"
            mode="html"
            openHtmlLinkSeparately
          >
            {wallet.name}
          </UiLink>
        </span>
      ))}
    </UiAlert>
  );
}

export default NoSupportedWalletsAlert;