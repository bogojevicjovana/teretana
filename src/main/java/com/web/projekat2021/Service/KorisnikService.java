package com.web.projekat2021.Service;


import com.web.projekat2021.Model.Korisnik;
import com.web.projekat2021.Repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface KorisnikService {

    List<Korisnik> pronadjiSve();

    Korisnik create(Korisnik korisnik) throws Exception;
}
