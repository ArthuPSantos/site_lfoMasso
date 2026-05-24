/**
 * ✏️ EDIT THESE VALUES to connect the real WhatsApp number and social profiles.
 * Number must be in international format (country + DDD + number, digits only).
 * Example: Brasil 47 99999-9999  →  "5547999999999"
 */
export const WHATSAPP_NUMBER = "5547984839183"; // ← replace with the real number

export const WHATSAPP_MESSAGE =
  "Olá Luiz! Gostaria de conhecer mais sobre seu trabalho na massoterapaia.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_LINK = "https://instagram.com/massagem_lfomassoterapia"; // ← replace with @profile URL
export const FACEBOOK_LINK = "https://www.facebook.com/share/1EQ9JURQYA/";   // ← replace with page URL