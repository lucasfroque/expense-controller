package com.lucasfroque.expensecontrol.service;

import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.model.Installment;
import com.lucasfroque.expensecontrol.model.enums.ExpenseStatus;
import com.lucasfroque.expensecontrol.repository.InstallmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class InstallmentService {

    @Autowired
    InstallmentRepository installmentRepository;

    public void generateInstallment(Expense expense) {
        LocalDateTime data = expense.getFirstPaymentDate();
        int numberInstallment = expense.getNumberInstallment();
        for (int i = 0; i < numberInstallment; i++) {
            Installment installment = new Installment();
            installment.setExpense(expense);
            installment.setPaymentDate(data.plusMonths(i));
            installment.setStatus(ExpenseStatus.WAITING_PAYMENT);
            installmentRepository.save(installment);
        }
    }
}
