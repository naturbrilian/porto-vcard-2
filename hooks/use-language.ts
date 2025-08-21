"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { type Language, getTranslation, type Translation } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useLanguageState() {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && ["en", "id", "ja"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("id")) {
        setLanguageState("id")
      } else if (browserLang.startsWith("ja")) {
        setLanguageState("ja")
      } else {
        setLanguageState("en")
      }
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (mounted) {
      localStorage.setItem("preferred-language", newLanguage)
    }
  }

  const t = getTranslation(language)

  return { language, setLanguage, t, mounted }
}

export { LanguageContext }
