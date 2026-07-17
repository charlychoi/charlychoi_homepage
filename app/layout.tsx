import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-agent.charlychoi.chatgpt.site"),
  title: "찰리초이 | AI 활용 강사 · 컨설턴트 · 작가",
  description:
    "AI를 활용한 강의, 컨설팅, 출판과 콘텐츠 제작을 소개하는 찰리초이 개인 홈페이지입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "찰리초이 | AI 활용 강사 · 컨설턴트 · 작가",
    description: "AI를 실무와 교육에 연결하는 활용 강의와 컨설팅",
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "찰리초이",
    images: [
      {
        url: "/charlychoi-left.png",
        width: 1024,
        height: 1024,
        alt: "AI 활용 강사이자 컨설턴트, 작가인 찰리초이",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "찰리초이 | AI 활용 강사 · 컨설턴트 · 작가",
    description: "AI를 실무와 교육에 연결하는 활용 강의와 컨설팅",
    images: ["/charlychoi-left.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
