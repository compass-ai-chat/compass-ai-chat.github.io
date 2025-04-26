"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare, Loader2 } from "lucide-react"
import { useTranslation } from "react-i18next"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, you would send the data to your API here
    console.log("Form data:", data)

    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-foreground font-medium">{t("contact.form.name")}</Label>
        <Input
          id="name"
          placeholder={t("contact.form.namePlaceholder")}
          {...register("name", { required: t("contact.form.nameRequired") as string })}
          className={`${errors.name ? "border-red-300" : ""} text-foreground placeholder:text-muted-foreground`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground font-medium">{t("contact.form.email")}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t("contact.form.emailPlaceholder")}
          {...register("email", {
            required: t("contact.form.emailRequired") as string,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("contact.form.emailInvalid") as string,
            },
          })}
          className={`${errors.email ? "border-red-300" : ""} text-foreground placeholder:text-muted-foreground`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground font-medium">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          placeholder={t("contact.form.messagePlaceholder")}
          rows={4}
          {...register("message", { required: t("contact.form.messageRequired") as string })}
          className={`${errors.message ? "border-red-300" : ""} text-foreground placeholder:text-muted-foreground`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("contact.form.sending")}
          </>
        ) : (
          <>
            <MessageSquare className="mr-2 h-4 w-4" />
            {t("contact.form.send")}
          </>
        )}
      </Button>

      {isSubmitted && (
        <div className="bg-primary/20 text-primary dark:text-primary-foreground p-3 rounded-md text-center">
          {t("contact.form.success")}
        </div>
      )}
    </form>
  )
}
