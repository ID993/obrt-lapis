export const serviceNames = {
  plumbing: 'Vodoinstalacije',
  diamondDrilling: 'Dijamantno bušenje',
  ventilation: 'Ventilacije',
} as const;

export type ServiceName = (typeof serviceNames)[keyof typeof serviceNames];
