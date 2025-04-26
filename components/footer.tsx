import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-500 mb-4">Compass</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t('footer.links.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('nav.demo')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('nav.download')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{t('footer.resources.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('footer.resources.documentation')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('footer.resources.repository')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('footer.resources.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
                  {t('footer.resources.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  )
}
