import { fazerLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes de Login de Usuário', function () {

    it('Validar que o login é realizado com sucesso quando email e senha estão corretos', function () {
        // Act
        const retornoDaFuncao = fazerLogin('andysachs@cinemax.com', '1234567');

        // Assert
        assert.equal(retornoDaFuncao, 'Login realizado com sucesso.');
    });

    it('Validar que a mensagem de credencial expirada é retornada quando o usuário está expirado', function () {
        // Act
        const retornoDaFuncao = fazerLogin('emilychar@cinemax.com', '9876543');

        // Assert
        assert.equal(retornoDaFuncao, 'Renove suas credenciais.');
    });

    it('Validar que credenciais incorretas é retornado quando o usuário não existe', function () {
        // Act
        const retornoDaFuncao = fazerLogin('odiabovesteprada2@cinemax.com', '1234567');

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais incorretas.');
    });

    it('Validar que credenciais incorretas é retornado quando a senha está errada para o usuário encontrado', function () {
        // Act
        const retornoDaFuncao = fazerLogin('mirandapriestly@cinemax.com', '8547965');

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais incorretas.');
    });

    

});