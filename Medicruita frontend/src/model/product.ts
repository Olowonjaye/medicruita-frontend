
export interface ITransactionDetails {
        dateTime: string; // e.g., "14 Feb 2025, 10:23 AM"
        transactionId: string; // e.g., "WSX-10452"
        user: {
          name: string; // e.g., "Adekunle Alabi"
          email: string; // e.g., "adekunle@yahoo.com"
        };
        transactionType: string;
        amount: number; // e.g., 250000
        transactionFee: number; // e.g., 500
        totalProcessed: number; // e.g., 249500
        paymentMethod: string; // e.g., "Bank Transfer"
        referenceId: string; // e.g., "ABC123XYZ"
        status: string;
        additionalDetails: {
          accountNumber: string; // e.g., "0123456789"
          bankName: string; // e.g., "GTBank"
          processingTime: string; // e.g., "Instant"
          initiatedBy: string
        };
        adminActions: string; // e.g., "None Required"
        internalNote?: string; // Optional field for notes
}


// export interface ITransactionResponse extends IBaseResponse<ITransactionDetails[]> {}
export interface ITransactionResponse {
    status: string;
    message: string;
    data: {
      transactions: ITransactionDetails[];
      total: number;
      page: number;
      pageSize: number;
    };
  }