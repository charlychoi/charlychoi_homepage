import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-agent.charlychoi.chatgpt.site"),
  title: "찰리초이 | 기업·공공기관 AI 활용 교육·AX 컨설팅",
  description: "기업·공공기관·중장년을 위한 생성형 AI, Gemini, 바이브코딩, AI Agent 교육과 AX 컨설팅. 30년 이상의 IT 경험과 AI 도구 개발·저술 경험을 바탕으로 실무 중심의 교육과 컨설팅을 제공합니다.",
  keywords: ["AI 활용 교육", "기업 AI 강의", "공공기관 AI 교육", "중장년 AI 교육", "생성형 AI 강사", "Gemini 교육", "바이브코딩 교육", "AI Agent 컨설팅", "AX 컨설팅", "Google Workspace 교육"],
  alternates: { canonical: "/" },
  openGraph: { title: "현장 업무에 바로 적용하는 AI 활용 교육과 AX 컨설팅", description: "찰리초이 | AI 활용 강사·컨설턴트·작가", type: "website", locale: "ko_KR", url: "/", siteName: "찰리초이", images: [{ url: "/og.webp", width: 1200, height: 630, alt: "현장 업무에 바로 적용하는 AI 활용 교육과 AX 컨설팅" }] },
  twitter: { card: "summary_large_image", title: "현장 업무에 바로 적용하는 AI 활용 교육과 AX 컨설팅", description: "찰리초이 | AI 활용 강사·컨설턴트·작가", images: ["/og.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html> }
