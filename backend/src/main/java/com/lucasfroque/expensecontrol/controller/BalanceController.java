package com.lucasfroque.expensecontrol.controller;

import com.lucasfroque.expensecontrol.dto.BalanceDto;
import com.lucasfroque.expensecontrol.model.Balance;
import com.lucasfroque.expensecontrol.service.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/balance")
public class BalanceController {

    @Autowired
    private BalanceService service;
    @GetMapping()
    public ResponseEntity<Balance> getBalance(){
        Balance obj = service.getBalance();
        return ResponseEntity.ok().body(obj);
    }
    @PutMapping()
    public ResponseEntity<BalanceDto> updateBalance(@RequestBody BalanceDto balance){
        Balance obj = service.updateBalance(balance);
        return ResponseEntity.ok().body(balance);
    }
}
