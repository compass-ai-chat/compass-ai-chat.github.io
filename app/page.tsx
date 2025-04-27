"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import FeatureCard from "@/components/feature-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslation } from "react-i18next"


export default function Home() {
  const { t } = useTranslation();

  const [isIframeMinimized, setIsIframeMinimized] = useState(false)
  const demoRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const scrollToDemo = () => {
    if (isMobile) {
      // Open demo in new tab on mobile
      window.open('https://nordwestt.com/compass', '_blank')
    } else {
      // Scroll to demo section on desktop
      demoRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img 
              className="h-24 self-center mb-4 md:mb-0 md:mr-4 animate-compass-rotate origin-center" 
              src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true" 
              alt="Compass Logo" 
            />
            <h1 className="my-auto text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center md:text-left">
              {t("hero.title")}<br/>
              <span className="text-emerald-500">{t("hero.subtitle_1")} <u>{t("hero.subtitle_2")}</u> {t("hero.subtitle_3")}</span>
            </h1>
          </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white" onClick={scrollToDemo}>
                {t("hero.tryDemo")}
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950">
                {t("contact.title")} {t("contact.subtitle")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section - Hidden on mobile */}
      {!isMobile && (
        <section ref={demoRef} className="container mx-auto px-4 py-16 md:py-24" id="demo">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {t("demo.title")} <span className="text-emerald-500">{t("demo.subtitle")}</span>
            </h2>

            <div
              className={`w-full max-w-2/3 mx-auto bg-white dark:bg-card rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${isIframeMinimized ? "h-16" : "h-[800px]"}`}
            >
              <div
                className="flex items-center justify-between bg-emerald-500 text-white p-4 cursor-pointer"
                onClick={() => setIsIframeMinimized(!isIframeMinimized)}
              >
                <h3 className="font-medium">{t("demo.demoTitle")}</h3>
                <Button variant="ghost" size="sm" className="text-white hover:bg-emerald-600 p-1 h-auto">
                  {isIframeMinimized ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </Button>
              </div>

              {!isIframeMinimized && (
                <div className="h-[700px] w-full bg-white dark:bg-card flex items-center justify-center">
                  <iframe src="https://nordwestt.com/compass" className="w-full h-full" />
                </div>
              )}
            </div>
          </motion.div>
        </section>
      )}

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="features">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("features.title")} <span className="text-emerald-500">{t("features.subtitle")}</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{t("features.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title={t("features.cards.privacy.title")}
            description={t("features.cards.privacy.description")}
            icon="Shield"
          />
          <FeatureCard
            title={t("features.cards.bestOfBoth.title")}
            description={t("features.cards.bestOfBoth.description")}
            icon="Network"
          />
          <FeatureCard
            title={t("features.cards.ownership.title")}
            description={t("features.cards.ownership.description")}
            icon="Lock"
          />
          <FeatureCard
            title={t("features.cards.openSource.title")}
            description={t("features.cards.openSource.description")}
            icon="Code"
          />
          <FeatureCard
            title={t("features.cards.offline.title")}
            description={t("features.cards.offline.description")}
            icon="Wifi"
          />
          <FeatureCard
            title={t("features.cards.customizable.title")}
            description={t("features.cards.customizable.description")}
            icon="Settings"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 my-16" id="contact">
        <div className="flex flex-col md:flex-row gap-12 items-center px-4 py-6 md:py-24 bg-surface-light dark:bg-surface-dark rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("contact.title")} <span className="text-emerald-500">{t("contact.subtitle")}</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-4 mb-8 w-full flex flex-col items-center">
              <div onClick={() => window.open('mailto:thomas@nordentoft.dk')} className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">{t("contact.email")}</h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">thomas@nordentoft.dk</p>
                </div>
              </div>

              <div onClick={() => window.open('https://github.com/nordwestt/compass#user-content-welcome-to-compass-', '_blank')} className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">{t("contact.github")}</h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">github.com/nordwestt/compass</p>
                </div>
              </div>

              <div onClick={() => window.open('https://www.linkedin.com/in/thomas-nordentoft', '_blank')} className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">{t("contact.linkedin")}</h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">https://www.linkedin.com/in/thomas-nordentoft</p>
                </div>
              </div>
            </div>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-card text-card-foreground dark:border dark:border-emerald-700/50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("contact.sendMessage")}</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
