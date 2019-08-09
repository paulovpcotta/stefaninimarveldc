package com.stefanini.heroi.dto;

import java.util.List;

public class HeroisDto {

	private String nome;
	
	private String sexo;
	
	private List<PoderesDto> poderes;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public List<PoderesDto> getPoderes() {
		return poderes;
	}

	public void setPoderes(List<PoderesDto> poderes) {
		this.poderes = poderes;
	}	
	
}