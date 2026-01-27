import localFont from 'next/font/local'

// Codan Bold - Display/Heading Font
export const codanBold = localFont({
  src: [
    {
      path: './Codan_Bold_Regular.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Codan_Bold_Regular.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Codan_Bold_Regular.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-codan-bold',
  display: 'swap',
})

// Nord - Body Font (Multiple Weights)
export const nord = localFont({
  src: [
    {
      path: './Nord-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Nord-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './Nord-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Nord-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Nord-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Nord-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Nord-Book.otf',
      weight: '450',
      style: 'normal',
    },
    {
      path: './Nord-BookItalic.otf',
      weight: '450',
      style: 'italic',
    },
    {
      path: './Nord-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Nord-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Nord-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Nord-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Nord-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Nord-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-nord',
  display: 'swap',
})

// NectoMono - Monospace Font
export const nectoMono = localFont({
  src: [
    {
      path: './NectoMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-necto-mono',
  display: 'swap',
})
