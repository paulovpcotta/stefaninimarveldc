package com.stefanini.heroi.util;

/**
 * 
 * @author c1297467
 *
 */
public class Base64Util {

	/**
	 * Instância da classe
	 * @return
	 */
	public static Base64Util getInstancia() {
		return new Base64Util();
	}
	
	/**
	 * Método que faz o decoder 
	 * @param bytesEncoded
	 * @return
	 */
	public String decoderBase64(byte[] bytesEncoded) {
		return new String(bytesEncoded);
	}
	
}