package com.stefanini.heroi.util;

import java.io.Serializable;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Classe responsável por criar a criptográfia do MD5 para HBase
 * @author c1297467
 *
 */
public final class CriptographUtilities implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8535689687227205376L;
	
	public enum TypeCriptograph {
        MD5("MD5"), SHA256("SHA-256");

        private String typeCriptograph;

        /**
         *
         */
        private TypeCriptograph(String typeCriptograph) {
            this.typeCriptograph = typeCriptograph;
        }

        /**
         * @return the typeCriptograph
         */
        public String getTypeCriptograph() {
            return typeCriptograph;
        }
    }

    private static final int SIGNUM = 1;
    private static final int RADIX = 16;

    private CriptographUtilities() {}

    /**
     * Return instance class
     * 
     * @return
     */
    public synchronized static CriptographUtilities getInstance() {
        return new CriptographUtilities();
    }

    /**
     * @param email
     * @param password
     * @return
     * @throws NoSuchAlgorithmException
     */
    public String createToken(String email, String password) throws NoSuchAlgorithmException {
        return criptograph(email.concat(password));
    }

    /**
     * @param value
     * @return
     * @throws NoSuchAlgorithmException
     */
    public String criptograph(String value) throws NoSuchAlgorithmException {
        return criptograph(value, TypeCriptograph.SHA256);
    }

    /**
     * Método que retorna os dados criptografados
     * @param value
     * @param typeCriptograph
     * @return
     * @throws NoSuchAlgorithmException
     */
    public String criptograph(String value, TypeCriptograph typeCriptograph) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance(typeCriptograph.getTypeCriptograph());
        byte [] bytes = messageDigest.digest(value.getBytes());

        return new BigInteger(SIGNUM, bytes).toString(RADIX);
    }

}