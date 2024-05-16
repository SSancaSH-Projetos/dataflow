package com.devloopers.masternote.entity;

import com.devloopers.masternote.dto.TurmaDTORequest;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.util.List;

@Data
@Entity
@Table(name = "turma")
@SQLDelete(sql = "UPDATE turma SET isDeleted = true WHERE id=?")
@Where(clause = "is_deleted=false")
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_turma")
    private Long id;

    @Column(name = "sigla")
    private String sigla;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "cursoId")
    private Curso curso;

    @Column(name = "isDeleted")
    private Boolean isDeleted = Boolean.FALSE;

    @OneToMany(mappedBy = "turma", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Aluno> alunos;

    public static Turma of(TurmaDTORequest turmaDTO) {
        Turma turma = new Turma();
        turma.setId(turmaDTO.getId());
        turma.setSigla(turmaDTO.getSigla());
        if (turmaDTO.getIsDeleted() != null) {
            turma.setIsDeleted(turmaDTO.getIsDeleted());
        }
        return turma;
    }
}
