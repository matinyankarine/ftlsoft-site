import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white border-t border-surface-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-surface-700/70">
            Need help? Have a question or feedback? We&apos;re here for you!
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-surface-200 bg-surface-50 p-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-surface-900">Email</h3>
            <a
              href="mailto:matinyan.karine95@gmail.com"
              className="text-sm text-primary-600 hover:text-primary-700 transition-colors break-all"
            >
              matinyan.karine95@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-surface-200 bg-surface-50 p-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-surface-900">Response Time</h3>
            <p className="text-sm text-surface-700/70">
              We typically respond within 24–48 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-surface-200 bg-surface-50 p-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-surface-900">Support</h3>
            <p className="text-sm text-surface-700/70">
              Questions, bug reports, or feature requests — reach out anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
