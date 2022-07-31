package com.lucasfroque.expensecontrol.service;

import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.model.Installment;
import com.lucasfroque.expensecontrol.model.enums.ExpenseStatus;
import com.lucasfroque.expensecontrol.repository.ExpenseRepository;
import com.lucasfroque.expensecontrol.repository.InstallmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;

@Service
public class InstallmentService {

    @Autowired
    InstallmentRepository installmentRepository;
    @Autowired
    ExpenseRepository expenseRepository;


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
    public Installment payInstallmentById(Long id){
        Installment installment = installmentRepository.findById(id).orElseThrow();
        installment.setStatus(ExpenseStatus.PAID);
        installmentRepository.save(installment);
        return installment;
    }
    public void updateExpenseDate(Expense expense){
        Installment installment = expense.getInstallment().stream()
                .filter(installments -> Objects.equals(installments.getStatus(), ExpenseStatus.WAITING_PAYMENT))
                .findFirst().orElseThrow();

        expense.setFirstPaymentDate(installment.getPaymentDate());

        expenseRepository.save(expense);
    }
}
