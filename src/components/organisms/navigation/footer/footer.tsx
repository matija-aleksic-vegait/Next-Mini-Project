import { Foot, Paragraph } from "@atoms";
import { LogoLink } from "@molecules";

interface FooterProps {}
export const Footer: React.FC<FooterProps> = ({}) => {
  var mainFooterParagraph = `        Co-creators. Passionate innovators. We're your software development
  partners, working at the cutting edge of digital product development. We
  have the technical expertise and domain experience to help you push
  boundaries, regardless of your industry.`;

  var metaFooterParagraph = `© Copyright Vega IT. All rights reserved.`;
  return (
    <Foot className="application-footer">
      <LogoLink
        href="#"
        aria-label="Go to VegaIT Website"
        src="/logos/logo-md.svg"
        alt="VegaIT Logo"
      />
      <Paragraph
        className="application-footer__content text-md"
        label={mainFooterParagraph}
      />
      <Paragraph
        className="application-footer__copyright text-md"
        label={metaFooterParagraph}
      />
    </Foot>
  );
};
