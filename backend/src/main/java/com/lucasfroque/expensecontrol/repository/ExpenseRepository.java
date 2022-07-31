package com.lucasfroque.expensecontrol.repository;

import com.lucasfroque.expensecontrol.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
