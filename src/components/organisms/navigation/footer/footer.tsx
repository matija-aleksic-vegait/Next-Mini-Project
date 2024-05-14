import { Foot } from "@/components/atoms/foot/foot";
import { Paragraph } from "@/components/atoms/paragraph/paragraph";
import { LogoLink } from "@/components/molecules/logo-link/logo-link";

interface FooterProps {}

{
  /* <footer className="application-footer">
<a href="#" aria-label="Go to VegaIT Website">

  <img src="/logos/logo-md.svg" alt="VegaIT Logo" />
</a>
<p className="application-footer__content text-md">
  Co-creators. Passionate innovators. We're your software development
  partners, working at the cutting edge of digital product development. We
  have the technical expertise and domain experience to help you push
  boundaries, regardless of your industry.
</p>
<p className="application-footer__copyright text-md">
  © Copyright Vega IT. All rights reserved.
</p>
</footer> */
}

export const Footer: React.FC<FooterProps> = ({}) => {
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
        label="        Co-creators. Passionate innovators. We're your software development
        partners, working at the cutting edge of digital product development. We
        have the technical expertise and domain experience to help you push
        boundaries, regardless of your industry."
      />
      <Paragraph
        className="application-footer__copyright text-md"
        label="© Copyright Vega IT. All rights reserved."
      />
    </Foot>
  );
};
