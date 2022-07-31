package com.lucasfroque.expensecontrol.repository;

import com.lucasfroque.expensecontrol.model.Installment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstallmentRepository extends JpaRepository<Installment, Long> {
}
