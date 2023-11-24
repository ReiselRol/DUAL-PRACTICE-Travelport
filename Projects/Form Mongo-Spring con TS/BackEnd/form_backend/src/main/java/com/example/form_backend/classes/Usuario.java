package com.example.form_backend.classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Usuario {

    @Id
    private String id;
    private String username;
    private Personal personal;

    public Usuario() {}

    public Usuario(String username, Personal personal) {
        this.username = username;
        this.personal = personal;
    }

    public String getId() {return id;}
    public void setId(String id) {this.id = id;}

    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}

    public Personal getPersonal() {return personal;}
    public void setPersonal(Personal personal) {this.personal = personal;}

}

class Personal {

    private String name;
    private String surname;
    private String country;
    private String dni;

    public Personal() {}

    public Personal(String name, String surname, String country, String dni) {
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.dni = dni;
    }

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getSurname() {return surname;}
    public void setSurname(String surname) {this.surname = surname;}

    public String getCountry() {return country;}
    public void setCountry(String country) {this.country = country;}

    public String getDni() {return dni;}
    public void setDni(String dni) {this.dni = dni;}
}
