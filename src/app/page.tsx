"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>
      <NavbarLayoutFloatingOverlay
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' },
        ]}
        logoSrc="/images/logo.svg"
        logoWidth={40}
        logoHeight={40}
        buttonText="Buy Paw"
        onButtonClick={() => { /* Handle click */ }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Join the PawCoin revolution!"
          subtitle="The friendly dog meme coin that’s taking over the crypto world."
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => { /* Handle click */ }}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => { /* Handle click */ }}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About PawCoin"
          descriptions={[
            'PawCoin is designed for lovers of our furry friends.',
            'Empower your meme strategy with our community-driven currency!'
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy PawCoin"
          steps={[
            { title: 'Create a Wallet', description: 'Set up your crypto wallet to hold PawCoin.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Purchase Ether', description: 'Buy Ether to exchange for PawCoin.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Exchange and Hold', description: 'Exchange your Ether for PawCoin and hold for future benefits.', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="PawCoin’s tokenomics is transparent and community-focused."
          cardItems={[
            { id: 1, title: 'Market Cap', description: 'Initially set at 10 million dollars.' },
            { id: 2, title: 'Tokens Locked', description: '70% of tokens are locked for 2 years.' },
            { id: 3, title: 'Founder’s Share', description: '20% of tokens are reserved for the development team.' },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="PawCoin Logo"
          logoText="PawCoin"
          columns={[
            { title: 'Products', items: [{ label: 'Buy PawCoin', onClick: () => { /* Handle click */ } }, { label: 'PawCoin FAQ', onClick: () => { /* Handle click */ } }] },
            { title: 'Community', items: [{ label: 'Twitter', onClick: () => { /* Handle click */ } }, { label: 'Discord', onClick: () => { /* Handle click */ } }] },
            { title: 'More', items: [{ label: 'Privacy Policy', onClick: () => { /* Handle click */ } }, { label: 'Contact', onClick: () => { /* Handle click */ } }] },
          ]}
          copyrightText="© 2023 PawCoin. All rights reserved."
          onPrivacyClick={() => { /* Handle click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
