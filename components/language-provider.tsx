"use client"

import type { ReactNode } from "react"
import { LanguageContext, useLanguageState } from "@/hooks/use-language"

interface LanguageProviderProps {
  children: ReactNode
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const { language, setLanguage, t } = useLanguageState()

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
