export interface TranferRequest {
    from: string;
    to: string;
    asset: string;
    amount: string;
}

export interface TransferResponse {
    id: string;
    from: string;
    to: string;
    asset: string;
    amount: string;
    amount_in_usd: string;
    created_at: string;
}
