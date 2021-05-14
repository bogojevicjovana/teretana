package com.web.projekat2021.Model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@DiscriminatorValue("trener")
public class Trener extends Korisnik {


    private Float prosecnaOcena;

    @ManyToOne(fetch = FetchType.EAGER)
    private FitnessCentar fitnesscentar;

    //trener drzi vise treninga
    @OneToMany(mappedBy = "trener", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Trening> treninziTrenera = new HashSet<>();

}
