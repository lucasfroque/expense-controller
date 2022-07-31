package com.lucasfroque.expensecontrol.controller;

import com.lucasfroque.expensecontrol.model.Installment;
import com.lucasfroque.expensecontrol.service.InstallmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/installments")
public class InstallmentController {

    @Autowired
    InstallmentService service;

    @GetMapping(path = "/pay/{id}")
    public ResponseEntity<Installment> payInstallmentById(@PathVariable Long id){
        Installment obj = service.payInstallmentById(id);
        service.updateExpenseDate(obj.getExpense());
        return ResponseEntity.ok().body(obj);
    }
}
