package com.stefanini.heroi.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stefanini.heroi.bo.PersonagemBO;
import com.stefanini.heroi.dto.PersonagemDto;
import com.stefanini.heroi.dto.PoderesDto;
import com.stefanini.heroi.util.BancoMemoriaUtil;

/**
 * Classe adicionar face
 * @author c1297467
 *
 */

@RestController
@RequestMapping(value="/herois")
public class HeroisController {

	private PersonagemBO personagemBo = new PersonagemBO();
	
	@RequestMapping(method=RequestMethod.GET)
	public List<PersonagemDto> carregaHeroi() throws IOException {
		return personagemBo.carregarPersonagem();
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public List<PoderesDto> cadastraPoderes(@RequestBody PoderesDto poderesDto) {
		return BancoMemoriaUtil.getInstance().gravaPoderes(poderesDto);
	}
	
}