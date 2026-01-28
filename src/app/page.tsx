import type { Metadata } from "next";
import HomeContainer from "@/containers/HomeContainer";

export const metadata: Metadata = {
  title: { absolute: "순복음범천교회" },
  description:
    "부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 성령의 인도하심을 따라 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.",
  keywords: [
    "순복음범천교회",
    "부산교회",
    "부산진구교회",
    "범천동교회",
    "주일예배",
    "교회 소개",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "순복음범천교회",
    description:
      "부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 성령의 인도하심을 따라 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.",
    url: "https://fgbc.or.kr",
    siteName: "순복음범천교회",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/bg.jpeg",
        alt: "순복음범천교회",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "순복음범천교회",
    description:
      "부산 부산진구에 위치한 순복음범천교회입니다. 모든 세대가 하나 되어 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.",
    images: ["/bg.jpeg"],
  },
};

export default function Home() {
  return (
    <HomeContainer />
  );
}
