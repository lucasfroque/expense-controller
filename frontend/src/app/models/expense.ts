import { Installment } from "./installments";

export class Expense{
    id!: number;
    description!: string;
    expenseValue!: number;
    numberInstallment!: number;
    firstPaymentDate!: Date;
    installment!: Installment[];
}