"use client";

import { sendGAEvent } from "@next/third-parties/google";

export const trackViewCarDetail = (carName: string) => {
  sendGAEvent({
    action: "view_car_detail",
    category: "engagement",
    label: `Lihat Detail - ${carName}`,
  });
};

export const trackContactSales = (carName: string) => {
  sendGAEvent({
    action: "contact_sales",
    category: "engagement",
    label: `Hubungi Sales - ${carName}`,
  });
};

export const trackViewSimulasiKredit = () => {
  sendGAEvent({
    action: "view_simulasi_kredit",
    category: "engagement",
    label: `Simulasi Kredit`,
  });
};

export const trackViewTestimoni = () => {
  sendGAEvent({
    action: "view_testimoni",
    category: "engagement",
    label: `Testimoni}`,
  });
};