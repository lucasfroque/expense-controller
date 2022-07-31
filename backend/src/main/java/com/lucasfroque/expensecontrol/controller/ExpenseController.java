package com.lucasfroque.expensecontrol.controller;

import com.lucasfroque.expensecontrol.dto.ExpenseDto;
import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    ExpenseService service;

    @PostMapping
    public ResponseEntity<Expense> insert(@RequestBody ExpenseDto obj){
        Expense response = service.create(obj);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(response.getId()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

}
