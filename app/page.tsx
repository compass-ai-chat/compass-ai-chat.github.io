"use client"

import { useState, useRef } from "react"
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

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("app.title")}, <br/>
              <span className="text-emerald-500">Under <u>your</u> Control</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Compass is an open-source AI chat application that gives you control between privacy and speed. Run entirely offline when privacy is a priority or connect to one of many providers, such as ChatGPT, when you need the latest models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white" onClick={scrollToDemo}>
                Try Demo
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950">
                Download Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section ref={demoRef} className="container mx-auto px-4 py-16 md:py-24" id="demo">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience Compass <span className="text-emerald-500">In Action</span>
          </h2>

          <div
            className={`w-full max-w-2/3 mx-auto bg-white dark:bg-card rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${isIframeMinimized ? "h-16" : "h-[800px]"}`}
          >
            <div
              className="flex items-center justify-between bg-emerald-500 text-white p-4 cursor-pointer"
              onClick={() => setIsIframeMinimized(!isIframeMinimized)}
            >
              <h3 className="font-medium">Compass Demo</h3>
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
            Why Choose <span className="text-emerald-500">Compass</span>?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Built with core values of sovereignty, privacy, and control</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Complete Privacy"
            description="Run models locally on your device. No data ever needs to be sent to external servers without your explicit permission."
            icon="Shield"
          />
          <FeatureCard
            title="Best of Both Worlds"
            description="Connect to providers like ChatGPT, Claude, or Gemini for cutting-edge models, or stay offline for sensitive tasks."
            icon="Network"
          />
          <FeatureCard
            title="True Ownership"
            description="You own your data and conversations. Export, delete, or manage them however you want."
            icon="Lock"
          />
          <FeatureCard
            title="Open Source"
            description="Fully transparent codebase. Verify the security and privacy claims yourself."
            icon="Code"
          />
          <FeatureCard
            title="Offline Capable"
            description="Works without an internet connection. Perfect for travel or when privacy is a priority."
            icon="Wifi"
          />
          <FeatureCard
            title="Customizable"
            description="Adapt Compass to your specific needs with plugins and extensions."
            icon="Settings"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-surface-light dark:bg-surface-dark rounded-3xl my-16" id="contact">
        <div className="grid md:grid-cols-2 gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="text-emerald-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Interested in Compass? Reach out through any of these
              channels.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">compass-ai@nordwestt.com</p>
                </div>
              </div>

              <div onClick={() => window.open('https://github.com/nordwestt/compass#user-content-welcome-to-compass-', '_blank')} className="flex items-center gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
                  <p className="text-gray-700 dark:text-gray-300">github.com/nordwestt/compass</p>
                </div>
              </div>

              <div onClick={() => window.open('https://www.linkedin.com/company/nordwestt', '_blank')} className="flex items-center gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                  <p className="text-gray-700 dark:text-gray-300">linkedin.com/company/compass-ai</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-card text-card-foreground dark:border dark:border-emerald-700/50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
