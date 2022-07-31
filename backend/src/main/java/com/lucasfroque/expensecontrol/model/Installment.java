package com.lucasfroque.expensecontrol.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lucasfroque.expensecontrol.model.enums.ExpenseStatus;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
public class Installment implements Serializable {

    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private ExpenseStatus status;

    private LocalDateTime paymentDate;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "expense_id")
    private Expense expense;
}