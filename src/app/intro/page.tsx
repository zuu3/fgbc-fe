import type { Metadata } from "next";
import { Suspense } from "react";
import IntroContainer from "@/containers/IntroContainer";

export const metadata: Metadata = {
  title: "교회 소개",
  description:
    "순복음범천교회의 비전, 핵심 가치, 목회 방향과 공동체의 이야기를 소개합니다.",
  keywords: ["교회 소개", "비전", "순복음범천교회", "부산교회", "범천동교회"],
  alternates: {
    canonical: "/intro",
  },
  openGraph: {
    title: "교회 소개 | 순복음범천교회",
    description:
      "순복음범천교회의 비전, 핵심 가치, 목회 방향과 공동체의 이야기를 소개합니다.",
    url: "https://fgbc.or.kr/intro",
    siteName: "순복음범천교회",
    locale: "ko_KR",
    type: "article",
    images: [
      {
        url: "/bg.jpeg",
        alt: "순복음범천교회",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "교회 소개 | 순복음범천교회",
    description:
      "순복음범천교회의 비전, 핵심 가치, 목회 방향과 공동체의 이야기를 소개합니다.",
    images: ["/bg.jpeg"],
  },
};

export default function IntroPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <IntroContainer />
        </Suspense>
    );
}
