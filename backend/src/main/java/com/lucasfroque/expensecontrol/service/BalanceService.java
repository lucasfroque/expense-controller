package com.lucasfroque.expensecontrol.service;

import com.lucasfroque.expensecontrol.dto.BalanceDto;
import com.lucasfroque.expensecontrol.model.Balance;
import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.repository.BalanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class BalanceService {
    @Autowired
    private BalanceRepository balanceRepository;
    @Autowired
    ExpenseService expenseService;

    public Balance updateBalance(BalanceDto newBalance){
        Balance balance = balanceRepository.findAll().stream().findFirst().orElse(new Balance());
        update(balance, newBalance);
        balanceRepository.save(balance);
        return balance;
    }

    public Balance getBalance(){
        BigDecimal totalValue = expenseService.findAll().stream().map(Expense::getExpenseTotalValue)
                .reduce(BigDecimal::add).orElse(BigDecimal.valueOf(0));

        Balance newBalance = new Balance();
        newBalance.setBalance(BigDecimal.valueOf(0));
        newBalance.setTotalExpense(totalValue);
        Balance balance = balanceRepository.findAll().stream().findFirst().orElse(null);

        if(balance == null) {
            balance = balanceRepository.save(newBalance);
        }else{
            balance.setTotalExpense(totalValue);
            balance = balanceRepository.save(balance);
        }

        return balance;
    }
    public void update(Balance balance, BalanceDto newBalance){
        balance.setBalance(newBalance.getBalance());
    }
}
