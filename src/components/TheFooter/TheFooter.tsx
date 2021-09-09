import { FC } from 'react';
import styled from 'styled-components';
import { UiLink } from '@components/ui/index';

const Footer: FC = () => {
  return (
    <FooterWrapperStyled>
      <div className="links-collection">
        <div className="links-collection__item">
          <UiLink
            to="https://wiki.arcx.money"
            mode="html"
            openHtmlLinkSeparately
          >
            Wiki
          </UiLink>
        </div>

        <div className="links-collection__item">
          <UiLink
            to="https://forum.arcx.money"
            mode="html"
            openHtmlLinkSeparately
          >
            Blog
          </UiLink>
        </div>
      </div>

      <div className="links-collection">
        <div className="links-collection__item">
          <UiLink
            to="https://discord.com/invite/skwz6je"
            mode="html"
            openHtmlLinkSeparately
          >
            Discord
          </UiLink>
        </div>

        <div className="links-collection__item">
          <UiLink
            to="https://twitter.com/arcxmoney"
            mode="html"
            openHtmlLinkSeparately
          >
            Twitter
          </UiLink>
        </div>
      </div>
    </FooterWrapperStyled>
  ); 
}

const FooterWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .links-collection {
    display: flex;
    align-items: center;

    &__item {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default Footer;