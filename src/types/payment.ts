export type PaymentMethod = "MTN_MOMO" | "AIRTEL_MONEY" | "CARD";

export interface PaymentRequest {
    planId: string;
    amount: number;
    method: PaymentMethod;
    phone?: string;
    email?: string;
}
