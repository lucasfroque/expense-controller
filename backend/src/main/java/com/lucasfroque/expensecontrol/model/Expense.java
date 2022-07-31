package com.lucasfroque.expensecontrol.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Expense implements Serializable {

    public static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private BigDecimal expenseValue;

    private BigDecimal expenseTotalValue;
    private Integer numberInstallment;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime firstPaymentDate;
    @OneToMany(mappedBy = "expense", cascade = CascadeType.ALL)
    private List<Installment> installment = new ArrayList<>();

}
