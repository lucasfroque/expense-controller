package com.lucasfroque.expensecontrol.controller;

import com.lucasfroque.expensecontrol.dto.ExpenseDto;
import com.lucasfroque.expensecontrol.model.Expense;
import com.lucasfroque.expensecontrol.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

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
    @GetMapping(value = "/{id}")
    public ResponseEntity<Expense> findById(@PathVariable Long id){
        Expense response = service.findById(id);

        return ResponseEntity.ok().body(response);
    }
    @GetMapping
    public ResponseEntity<List<Expense>> findAll(){
        List<Expense> obj = service.findAll();
        return ResponseEntity.ok().body(obj);

    }
}
