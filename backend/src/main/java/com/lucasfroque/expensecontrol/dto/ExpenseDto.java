package com.lucasfroque.expensecontrol.dto;

import lombok.Getter;

@Getter
public class ExpenseDto {
    private String description;
    private Double expenseValue;
    private Integer numberInstallment;
    private String firstPaymentDate;
}