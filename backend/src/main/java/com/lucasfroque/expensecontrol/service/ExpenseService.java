package com.lucasfroque.expensecontrol.service;

import com.lucasfroque.expensecontrol.dto.ExpenseDto;
import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense create(ExpenseDto expenseDto) {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime date = LocalDateTime.parse(expenseDto.getFirstPaymentDate() + " 00:01", format);
        BigDecimal expenseTotalValue = BigDecimal.valueOf(expenseDto.getExpenseValue() * expenseDto.getNumberInstallment());

        Expense expense = new Expense();
        expense.setDescription(expenseDto.getDescription());
        expense.setExpenseValue(BigDecimal.valueOf(expenseDto.getExpenseValue()));
        expense.setExpenseTotalValue(expenseTotalValue);
        expense.setNumberInstallment(expenseDto.getNumberInstallment());
        expense.setFirstPaymentDate(date);
        expenseRepository.save(expense);

        return expense;
    }
}
