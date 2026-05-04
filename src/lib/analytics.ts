import { vemetric } from '@vemetric/browser';

const TOKEN = import.meta.env.VITE_VEMETRIC_TOKEN as string | undefined;

export function initAnalytics() {
  if (!TOKEN) return;
  if (import.meta.env.DEV) return;
  vemetric.init({ token: TOKEN });
}

export function track(name: string, data?: Record<string, string | number | boolean>) {
  if (!TOKEN || import.meta.env.DEV) return;
  vemetric.trackEvent(name, { eventData: data });
}
