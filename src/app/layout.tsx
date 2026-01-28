import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    default: "순복음범천교회",
    template: "%s | 순복음범천교회"
  },
  description: "부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 성령의 인도하심을 따라 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.",
  keywords: ["순복음범천교회", "부산교회", "순복음", "기독교대한하나님의성회", "부산진구교회", "범천동교회"],
  authors: [{ name: "순복음범천교회" }],
  creator: "순복음범천교회",
  publisher: "순복음범천교회",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fgbc.or.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "순복음범천교회",
    description: "부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 성령의 인도하심을 따라 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.",
    url: 'https://fgbc.or.kr',
    siteName: '순복음범천교회',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/bg.jpeg',
        alt: '순복음범천교회',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '순복음범천교회',
    description: '부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.',
    images: ['/bg.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

// 구조화된 데이터 (Schema.org - 교회 정보)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: '순복음범천교회',
  alternateName: 'Full Gospel Beomcheon Church',
  url: 'https://fgbc.or.kr',
  logo: 'https://fgbc.or.kr/bg.jpeg',
  image: 'https://fgbc.or.kr/bg.jpeg',
  description: '부산 부산진구에 위치한 순복음범천교회입니다. 기독교대한하나님의성회(순복음) 소속 교회입니다.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '엄광로 359',
    addressLocality: '부산진구',
    addressRegion: '부산광역시',
    postalCode: '47293',
    addressCountry: 'KR',
  },
  telephone: '+82-51-634-9362',
  faxNumber: '+82-51-635-2801',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.youtube.com/@순복음범천교회',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="page-transition">
          {children}
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </body>
    </html>
  );
}
