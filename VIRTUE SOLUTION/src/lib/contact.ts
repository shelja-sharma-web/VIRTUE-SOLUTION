export const CONTACT = {
  callAnytime: "+91 91160 34330",
  callAnytimeRaw: "+919116034330",
  consultation: "+91 91160 34330",
  consultationRaw: "+919116034330",
  email: "sales@virtuesolutions.in",
  infoEmail: "info@virtuesolutions.in",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
};

export const TEL_CALL = `tel:${CONTACT.callAnytimeRaw}`;
export const WA_CALL = `https://wa.me/${CONTACT.callAnytimeRaw.replace("+", "")}`;
export const TEL_CONSULT = `tel:${CONTACT.consultationRaw}`;
export const WA_CONSULT = `https://wa.me/${CONTACT.consultationRaw.replace("+", "")}`;
export const MAILTO = `mailto:${CONTACT.email}`;
export const MAILTO_INFO = `mailto:${CONTACT.infoEmail}`;

export function openCallAndWhatsApp(number: "call" | "consult" = "call") {
  const tel = number === "call" ? TEL_CALL : TEL_CONSULT;
  const wa = number === "call" ? WA_CALL : WA_CONSULT;
  if (typeof window !== "undefined") {
    window.open(wa, "_blank", "noopener,noreferrer");
    window.location.href = tel;
  }
}

/** Scrolls to #contact if present, otherwise navigates to /contact. */
export function goToContact() {
  if (typeof window === "undefined") return;
  try {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // ensure focus for accessibility
      (el as HTMLElement).focus?.();
      return;
    }
  } catch (e) {
    // ignore
  }
  // fallback navigation
  window.location.href = "/contact";
}
