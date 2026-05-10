const usuarios = [
    {
        id: 1, 
        nome: 'Miranda Priestly', 
        email: 'mirandapriestly@cinemax.com', 
        senha: '8521479',
        expirado: false
    },
    {
        id: 2, 
        nome: 'Andy Sachs', 
        email: 'andysachs@cinemax.com', 
        senha: '1234567',
        expirado: false
    },
    {
        id: 3, 
        nome: 'Emily Charlton', 
        email: 'emilychar@cinemax.com', 
        senha: '9876543',
        expirado: true
    }

];

// Construir função para realizar login
// Receber mensagem login realizado com sucesso

export function fazerLogin(emailInformado, senhaInformada) {
  if (!emailInformado || !senhaInformada) {
    throw new Error('Email e senha precisam ser informados.');
  }

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === emailInformado) {

      if (usuarios[i].expirado) {
        return 'Renove suas credenciais.';
      }

      if (usuarios[i].senha !== senhaInformada) {
        return 'Credenciais incorretas.';
      }

      return 'Login realizado com sucesso.';
    }
  }

  return 'Credenciais incorretas.';
}