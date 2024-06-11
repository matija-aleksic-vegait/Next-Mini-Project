import ImageConstants from '@/constants/image-constants';
import { Logo } from '@atoms';
import '@css';

export default {
  title: 'atoms/Logo',
  component: Logo,
  parameters: {},
  tags: ['autodocs'],
};

export const VegaItSmallLogo = {
  args: {
    src: '/logos/logo-sm.svg',
    alt: 'VegaIT Logo',
    height: ImageConstants.LOGO_SM_HEIGHT,
    width: ImageConstants.LOGO_SM_WIDTH,
  },
};

export const VegaItMediumLogo = {
  args: {
    src: '/logos/logo-md.svg',
    alt: 'VegaIT Logo',
    height: ImageConstants.LOGO_MD_HEIGHT,
    width: ImageConstants.LOGO_MD_WIDTH,
  },
};
