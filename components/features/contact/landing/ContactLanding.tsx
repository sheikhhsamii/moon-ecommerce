"use client";

import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

import { contactLandingThemes } from "./contact-theme";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@moonecommerce.com", "support@moonecommerce.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Moonway Ave", "Studio 4B, New York, NY 10012"],
  },
];

const ContactLanding = () => {
  const styles = contactLandingThemes.default;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate an API call
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    alert("Thank you for reaching out! We will get back to you shortly.");
  };

  return (
    <main className={styles.page}>
      <section className="custom-container pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[36px] px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 text-center",
            styles.heroShell
          )}
        >
          <span
            className={cn(
              "inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
              styles.heroBadge
            )}
          >
            Get In Touch
          </span>

          <div className="space-y-4">
            <h1
              className={cn(
                "max-w-3xl mx-auto text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                styles.heroTitle
              )}
            >
              We’d love to hear from you.
            </h1>
            <p
              className={cn(
                "max-w-2xl mx-auto text-base leading-7 sm:text-lg",
                styles.heroCopy
              )}
            >
              Whether you have a question about our collections, need help with an order, or just want to share your thoughts on intentional living, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="custom-container pb-18 sm:pb-24">
        <div
          className={cn(
            "grid items-start gap-10 overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:px-10 lg:py-12",
            styles.contactShell
          )}
        >
          {/* Contact Information */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-5">
              <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.sectionEyebrow)}>
                Contact Details
              </p>
              <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
                Here to help.
              </h2>
              <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
                Reach out to us through any of the channels below. We aim to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={styles.infoCard}>
                    <Icon className={cn("size-6", styles.infoIcon)} />
                    <h3 className={cn("mb-2", styles.infoTitle)}>{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className={styles.infoText}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn("rounded-[28px] p-6 sm:p-8 lg:p-10", styles.formCard)}>
            <div className="mb-8">
              <h3 className={cn("text-2xl font-semibold mb-2", styles.sectionTitle)}>Send us a message</h3>
              <p className={styles.sectionCopy}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className={styles.inputWrapper}>
                  <label htmlFor="name" className={styles.inputLabel}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className={styles.inputField}
                    {...register("name", { required: true })}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="email" className={styles.inputLabel}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className={styles.inputField}
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <label htmlFor="subject" className={styles.inputLabel}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className={styles.inputField}
                  {...register("subject", { required: true })}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label htmlFor="message" className={styles.inputLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className={cn(styles.inputField, "h-auto py-3 resize-none")}
                  {...register("message", { required: true })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  styles.submitButton,
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactLanding;
