package com.example.form_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

    @GetMapping("/saludo")
    private String holaMundo() {
        return "Hola Mundo";
    }
}
