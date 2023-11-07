package com.example.form_backend.interfaces;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.form_backend.classes.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    UsuarioProjection findProjectedById(String id);
}
