"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Github, Linkedin, Mail, Monitor } from "lucide-react";
import { logoWindows } from "ionicons/icons";
import { IonIcon } from '@ionic/react';

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import FeatureCard from "@/components/feature-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PolarisDiagram from "@/components/polaris-diagram";
import { useTranslation } from "react-i18next";
import CompassDiagram from "@/components/compass-diagram";
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faLinux, faDocker } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const { t } = useTranslation();

  const [isIframeMinimized, setIsIframeMinimized] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const scrollToDemo = () => {
    if (isMobile) {
      // Open demo in new tab on mobile
      window.open("https://compass-ai.chat/compass", "_blank");
    } else {
      // Scroll to demo section on desktop
      demoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Supported providers data
  const supportedProviders = [
    { name: "OpenAI", logo: "./images/providers/openai.png" },
    {
      name: "Anthropic",
      logo: "./images/providers/anthropic.jpeg",
    },
    { name: "Google", logo: "./images/providers/google.png" },
    { name: "Mistral AI", logo: "./images/providers/mistral.png" },
    { name: "Replicate", logo: "./images/providers/replicate.png" },
    { name: "Ollama", logo: "./images/providers/ollama.png" },
    { name: "xAI", logo: "./images/providers/xai.png" },
    { name: "Groq", logo: "./images/providers/groq.png" },
  ];

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
            <div className="flex flex-col md:flex-row items-center mb-6 justify-center">
              <img
                className="h-24 self-center mb-4 md:mb-0 md:mr-4 animate-compass-rotate origin-center"
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="Compass Logo"
              />
              <h1 className="my-auto text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center md:text-left">
                {t("hero.title")}
                <br />
                <span className="text-emerald-500">
                  {t("hero.subtitle_1")} <u>{t("hero.subtitle_2")}</u>{" "}
                  {t("hero.subtitle_3")}
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={scrollToDemo}
              >
                {t("hero.tryDemo")}
              </Button>
              <Button
                onClick={() => window.open("https://github.com/compass-ai-chat/compass#user-content-welcome-to-compass-", "_blank")}
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950"
              >
                {t("contact.title")} {t("contact.subtitle")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supported Providers Section */}
      <section className="py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("providers.title")}{" "}
              <span className="text-emerald-500">
                {t("providers.subtitle")}
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t("providers.description")}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Gradient overlay - left */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900/50 z-10"></div>

          {/* Scrolling providers */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center py-8 md:gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {/* First set of providers */}
              {supportedProviders.map((provider, index) => (
                <div
                  key={`provider-${index}`}
                  className="flex flex-col items-center mx-6"
                >
                  <div className="w-24 h-24 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-4">
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="mt-3 text-gray-700 dark:text-gray-300 font-medium">
                    {provider.name}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless looping */}
              {supportedProviders.map((provider, index) => (
                <div
                  key={`provider-dup-${index}`}
                  className="flex flex-col items-center mx-6"
                >
                  <div className="w-24 h-24 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-4">
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="mt-3 text-gray-700 dark:text-gray-300 font-medium">
                    {provider.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlay - right */}
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900/50 z-10"></div>
        </div>
      </section>

      {/* Demo Section - Hidden on mobile */}
      {!isMobile && (
        <section
          ref={demoRef}
          className="container mx-auto px-4 py-16 md:py-24"
          id="demo"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {t("demo.title")}{" "}
              <span className="text-emerald-500">{t("demo.subtitle")}</span>
            </h2>
            {!showDemo && (
              <motion.div
                className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col items-center justify-center border-2 border-emerald-300 dark:border-emerald-500 relative"
                onClick={() => setShowDemo(true)}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background pattern */}
                {/* <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
                </div> */}

                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-teal-300 dark:from-emerald-700 dark:to-teal-700 rounded-2xl blur opacity-30 animate-pulse"></div>

                <img
                  src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                  alt="Compass Logo"
                  className="h-20 mb-4 animate-compass-rotate origin-center relative z-10 drop-shadow-lg"
                />
                <p className="text-xl font-semibold text-white mb-2 relative z-10 drop-shadow-md">
                  Compass
                </p>
                <div className="flex items-center justify-center mt-2 relative z-10">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium animate-pulse">
                    {t("demo.clickToExplore") || "Click to explore"}
                  </span>
                </div>
              </motion.div>
            )}
            {showDemo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "800px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-2/3 mx-auto bg-white dark:bg-card rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between bg-emerald-500 text-white p-4">
                  <h3 className="font-medium">{t("demo.demoTitle")}</h3>
                </div>

                {!isIframeMinimized && (
                  <div className="h-[700px] w-full bg-white dark:bg-card flex items-center justify-center">
                    <iframe
                      src="https://compass-ai.chat/compass"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </motion.div>
            )}
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
            {t("features.title")}{" "}
            <span className="text-emerald-500">{t("features.subtitle")}?</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title={t("features.cards.privacy.title")}
            description={t("features.cards.privacy.description")}
            icon="Shield"
          />
          <FeatureCard
            title={t("features.cards.bestOfBoth.title")}
            description={
              <>
                <Trans i18nKey="features.cards.bestOfBoth.description" components={{ 1: <span className="text-primary font-medium" />, 2: <span className="text-primary font-medium" />, 3: <span className="text-primary font-medium" /> }} />
              </>
            }
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
            title={t("features.cards.authentication.title")}
            description={
              <>
                <Trans i18nKey="features.cards.authentication.description" components={{ 1: <span className="text-primary font-medium" />, 2: <span className="text-primary font-medium" /> }} />
              </>
            }
            icon="KeyRound"
          />
          <FeatureCard
            title={t("features.cards.documents.title")}
            description={t("features.cards.documents.description")}
            icon="File"
          />
          <FeatureCard
            title={t("features.cards.characters.title")}
            description={t("features.cards.characters.description")}
            icon="UserRound"
          />
          <FeatureCard
            title={t("features.cards.customizable.title")}
            description={t("features.cards.customizable.description")}
            icon="Settings"
          />
        </div>
      </section>

      {/* Diagram Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="diagram">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("diagram.title")}{" "}
            <span className="text-emerald-500">{t("diagram.subtitle")}?</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("diagram.description")}
          </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
        <div className="flex justify-center flex-col lg:flex-row">
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-[10%] bg-card p-4 rounded-2xl h-full">
            {t("diagram.compass.description")}
          </p>
          <CompassDiagram />
        </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
        <div className="flex justify-center flex-col lg:flex-row">
          <PolarisDiagram />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-[10%] bg-card p-4 rounded-2xl h-full">
            {t("diagram.polaris.description")}
          </p>
        </div>
        </motion.div>
        
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="download">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("download.title")}{" "}
            <span className="text-emerald-500">{t("download.subtitle")}</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t("download.description")}
          </p>
          <div className="flex items-center justify-around gap-2 text-lg text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto mb-8 font-medium p-4 bg-white rounded-lg">
            <img 
              src="https://ollama.com/public/ollama.png" 
              alt="Ollama Logo" 
              width={40}
              height={40}
            />
            <div className="d-flex flex-col">
              <p>To run AI locally, you'll need an inference engine -</p>
              
              <p>
                Compass has been built to work seamlessly with Ollama
              </p>
              <p>
              <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700 dark:hover:text-emerald-300">Click here to install it</a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg flex items-center gap-3"
                onClick={() => window.open("https://github.com/compass-ai-chat/compass/releases/download/v1.0.2/compass_0.1.0_x64_en-US.msi", "_blank")}
              >
                <FontAwesomeIcon icon={faWindows} style={{width: "1.5em", height: "1.5em"}}/>
                {t("download.downloadFor")} Windows
              </Button>
              
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
            <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg flex items-center gap-3"
                onClick={() => window.open("https://github.com/compass-ai-chat/compass/releases/download/v1.0.2/compass_0.1.0_amd64.AppImage", "_blank")}
              >
                <FontAwesomeIcon icon={faLinux} style={{width: "1.5em", height: "1.5em"}}/>
                {t("download.downloadFor")} Linux
              </Button>
              </motion.div>
          </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center mt-8 justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900 px-8 py-6 text-lg flex items-center gap-3 mx-auto"
                onClick={() => window.open("https://github.com/compass-ai-chat/compass/releases", "_blank")}
              >
                <FontAwesomeIcon icon={faDocker} style={{width: "1.5em", height: "1.5em"}}/>
                {t("download.preferDocker")}
              </Button>
            </motion.div>

        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 my-16" id="contact">
        <div className="flex flex-col md:flex-row gap-12 items-center px-4 py-6 md:py-24 bg-surface-light dark:bg-surface-dark rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:px-4 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 mx-auto">
              {t("contact.title")}{" "}
              <span className="text-emerald-500">{t("contact.subtitle")}</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-4 mb-8 w-full flex flex-col items-center">
              <div
                onClick={() => window.open("mailto:info@compass-ai.chat")}
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.email")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    info@compass-ai.chat
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://github.com/compass-ai-chat/compass#user-content-welcome-to-compass-",
                    "_blank",
                  )
                }
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.github")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    github.com/compass-ai-chat/compass
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/compass-ai-chat",
                    "_blank",
                  )
                }
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.linkedin")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    https://www.linkedin.com/company/compass-ai-chat
                  </p>
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("contact.sendMessage")}
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
