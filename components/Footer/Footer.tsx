import clsx from 'clsx';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import LinkTo from '../LinkTo';
import styles from './Footer.module.css';

const FooterLink = ({
  children,
  isExternal,
  href,
}: {
  children: React.ReactNode;
  isExternal?: boolean;
  href: string;
}) => {
  const className = clsx(
    ' hover:text-gray-800 dark:hover:text-gray-200 no-underline text-current'
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }

  return (
    <LinkTo href={href} className={className}>
      {children}
    </LinkTo>
  );
};

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <footer
      className="flex justify-center w-full px-4 py-8 mt-10 bg-gray-50 lg:px-28 dark:bg-gray-800 "
      id="footer"
    >
      <div className="max-w-[1200px] flex-1 flex justify-between items-center">
        <div>
          <LinkTo href="/">
            <svg
              ref={ref}
              viewBox="0 0 106 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(
                'h-auto text-black stroke-current w-14 dark:text-white stroke-2 transition-all opacity-70 cursor-pointer hover:opacity-90',
                styles.signature,
                inView && styles['in-view']
              )}
            >
              <path
                d="M1.33313 93.121C1.60649 91.7042 1.82365 91.8109 2.31418 90.5012C7.65912 80.9966 7.81918 81.1447 13.7585 72.0012C21.066 60.9933 21.1474 61.1053 29.2907 50.7183C38.0994 39.329 38.2329 39.5461 48.0924 29.1077C57.294 19.857 57.1461 19.8466 67.3846 11.7535C74.0082 6.62634 73.8068 6.59617 81.1179 2.5856C83.8656 1.07828 84 0.499919 85.5326 1.43934C87 2.50001 86.6877 3.50001 86.5132 3.8953C84.1231 9.30966 84 9.00001 81 14.5C73.6651 26.7915 73.823 26.6639 65.913 38.6033C57.0697 51.2257 57.4334 51.4675 48.4192 63.9791C40.6909 75.1428 40.802 75.2099 33.378 86.5721C26.7364 97.3653 26.5489 97.2446 20.1348 108.183C15.6725 114.912 15.7354 115.374 11.5865 122.263C9.66528 125.664 9.20127 125.664 9.66528 127.117C9.98829 128.128 10.872 126.941 15.3937 122.263C22.7169 113.502 22.9107 113.739 29.6175 104.417C38.4137 91.9896 38.821 92.3008 47.6018 79.8598C56.4852 67.7695 56.6435 67.9235 66.0767 56.2844C71.8838 49.1403 71.9351 49.2695 78.5021 42.8597C86.7807 34.9939 89 31.9999 91.0911 32.5456C92.5 33.4999 90.9256 34.7385 89.4563 36.6385C87 39.8151 85.5 41.4999 81.2815 47.1165C71.3767 60.3041 71.0858 60.0681 60.8446 72.9836C54.8172 80.8053 54.881 80.8237 49.4003 89.0281C44.3521 96.4117 44.5171 96.4401 40.2445 104.254C36.3414 110.891 36.5 111.5 37.1381 112.44C37.5567 113.056 40 111.5 43.0239 109.656C46.8409 107.329 50.7127 103.559 57.5751 96.2316C66.7668 86.3578 67.1895 86.7923 76.3768 76.9131C84.4778 69.0405 84.4238 69.004 92.8895 61.5236C97.3298 57.2618 97.3937 57.4986 102.209 53.8289C103.776 52.6339 104.5 52.5 104.988 53.0104C105.178 53.2093 104.642 54.1777 103.68 55.6298C98.3266 63.7099 98.2129 63.5928 92.399 71.3465C84.6914 80.8093 84.9202 80.9817 76.8673 90.1739C70.4829 97.0398 70.8763 97.3446 64.7688 104.417C60.8851 110.039 60.5915 109.81 57.0845 115.714C56.2632 117.096 56 118 57 118.5C58 119 60 117 66.2399 110.966C73.5676 104.445 73.9417 104.924 81.1179 98.1959C87.5693 92.488 87.71 92.7397 94.5247 87.5545C98.4997 84.0716 99.2227 83.752 100.737 84.2801C101.83 84.6609 101.886 87.5535 101.228 88.5471C97.9782 93.4518 98.5 92.9999 94.5247 98.2066C89.5 104 88.1472 104.647 89 105.5C89.5 106 90.6257 105.366 95.0148 102.125C100.324 98.2058 100.49 98.5273 105.479 94.103M71 92.9999C75.5437 89.621 78.4202 89.1096 83.08 85.9175C86.9691 83.6421 86.8882 83.5205 90.9279 81.4968"
                strokeLinecap="round"
              />
            </svg>
          </LinkTo>
        </div>
        <div className="grid grid-flow-col gap-3 text-gray-600">
          <FooterLink href="https://github.com/paolotiu" isExternal>
            Github
          </FooterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;