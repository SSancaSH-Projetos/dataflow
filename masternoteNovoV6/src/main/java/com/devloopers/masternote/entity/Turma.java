package com.devloopers.masternote.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "turma")
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_turma")
    private Long id;

    @Column(name = "sigla")
    private String sigla;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "curso_id_curso")
    private Curso curso;
    
//    @JsonIgnore
//    @ManyToMany(mappedBy = "turmas")
//    private List<Aluno> alunos;

   //@OneToMany(mappedBy = "turma")
    //private List<Aluno> alunos;

    // Getters and Setters
}