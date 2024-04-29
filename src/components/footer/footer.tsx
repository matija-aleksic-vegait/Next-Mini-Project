import Link from "next/link";

function Footer() {
  return (
    <footer className="application-footer">
      <a href="#" aria-label="Go to VegaIT Website">
        {/* https://www.vegaitglobal.com/ */}
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
    </footer>
  );
}

export default Footer;
