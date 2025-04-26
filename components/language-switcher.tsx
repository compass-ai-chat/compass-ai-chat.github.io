"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { changeLanguage } from '../i18n'

// Flag emojis for supported languages
const languageFlags: Record<string, string> = {
  en: "🇬🇧",
  it: "🇮🇹",
}

// Language names for display
const languageNames: Record<string, string> = {
  en: "English",
  it: "Italiano",
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en')
  
  // Update the current language when i18n.language changes
  useEffect(() => {
    setCurrentLanguage(i18n.language || 'en')
  }, [i18n.language])

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang)
    setCurrentLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex items-center gap-1 px-2 rounded-full"
          aria-label="Change language"
        >
          <span className="text-lg mr-1 text-gray-600">{languageFlags[currentLanguage]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languageFlags).map((lang) => (
          <DropdownMenuItem 
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`flex items-center gap-2 ${currentLanguage === lang ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <span className="text-lg">{languageFlags[lang]}</span>
            <span>{languageNames[lang]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 