import type { Metadata } from "next";
import { Suspense } from "react";
import NewcomerContainer from "@/containers/NewcomerContainer";

export const metadata: Metadata = {
  title: "새가족 안내",
  description:
    "처음 오신 분들을 위한 새가족 안내와 교회 등록, 예배 참여 방법을 제공합니다.",
  keywords: ["새가족", "교회 등록", "순복음범천교회", "부산교회", "범천동교회"],
  alternates: {
    canonical: "/newcomer",
  },
  openGraph: {
    title: "새가족 안내 | 순복음범천교회",
    description:
      "처음 오신 분들을 위한 새가족 안내와 교회 등록, 예배 참여 방법을 제공합니다.",
    url: "https://fgbc.or.kr/newcomer",
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
    title: "새가족 안내 | 순복음범천교회",
    description:
      "처음 오신 분들을 위한 새가족 안내와 교회 등록, 예배 참여 방법을 제공합니다.",
    images: ["/bg.jpeg"],
  },
};

export default function NewcomerPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewcomerContainer />
        </Suspense>
    );
}
