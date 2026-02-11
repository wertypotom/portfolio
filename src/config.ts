/**
 * Site configuration based on environment variables
 * Supports different site variants for multi-domain deployment
 */

type SiteVariant = 'default' | 'ru';

interface SiteConfig {
  variant: SiteVariant;
  showLinkedIn: boolean;
  locationText: string;
  phoneNumber: string;
  showWhatsApp: boolean;
  showTelegram: boolean;
  telegramUsername: string;
}

const SITE_VARIANT = (import.meta.env.VITE_SITE_VARIANT ||
  'default') as SiteVariant;

const config: SiteConfig = {
  variant: SITE_VARIANT,
  showLinkedIn: SITE_VARIANT === 'default',
  locationText:
    SITE_VARIANT === 'ru'
      ? '📍 Kazakhstan, Almaty'
      : '📍 Milwaukee, WI • Open to relocation across the US',
  phoneNumber: SITE_VARIANT === 'ru' ? '+77758265262' : '+14143242521',
  showWhatsApp: SITE_VARIANT === 'ru',
  showTelegram: SITE_VARIANT === 'ru',
  telegramUsername: 'wertypotom',
};

export default config;
