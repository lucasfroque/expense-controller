package com.lucasfroque.expensecontrol.repository;

import com.lucasfroque.expensecontrol.model.Balance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceRepository extends JpaRepository<Balance, Long> {
}
