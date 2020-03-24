import {useMediaQuery} from 'react-responsive'

// Constants
const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

const min = (size) => size + 1;

/**
 * Responsive System v1
 *
 * When worked on mobile view, our Media Query assumes that the design is Mobile first.
 *
 * So by default, view is for Mobile, Tablet and Desktop.
 *
 * Then, as we move towards larger devices, we will have
 * <Tablet>
 *   This will show for tablet and laptop
 * </Tablet>
 * <Laptop>
 *   This will show for laptop
 * </Laptop>
 *
 * @author Jacktator
 */
const device = {
  mobile: `(max-width: ${size.tablet}px)`,
  tablet: `(min-width: ${min(size.tablet)}px)`,
  laptop: `(min-width: ${min(size.laptop)}px)`,
  desktop: `(min-width: ${min(size.desktop)}px)`,
};


/**
 * MobileOnly
 *
 * Visible: Mobile Only
 */
export const MobileOnly = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: size.tablet});
  return isMobile ? children : null
};

/**
 * Tablet
 *
 * Visible: Tablet & Larger
 */
export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({minWidth: min(size.tablet)});
  return isTablet ? children : null
};

/**
 * TabletOnly
 *
 * Visible: Tablet Only
 */
export const TabletOnly = ({children}) => {
  const isTablet = useMediaQuery({minWidth: min(size.tablet), maxWidth: size.laptop});
  return isTablet ? children : null
};

/**
 * LaptopOnly
 *
 * Visible: Laptop & Larger
 */
export const Laptop = ({children}) => {
  const isLaptop = useMediaQuery({minWidth: min(size.laptop)});
  return isLaptop ? children : null
};

export default device;
