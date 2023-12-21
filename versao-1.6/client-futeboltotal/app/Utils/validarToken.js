export async function validarToken() {

    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.error('Token ausente');
        return { loggedIn: false, nome: '', email: '' };

      }
  
      const response = await fetch(`http://api.futeboltotal.cloud/usuario/validar-token?token=${token}`, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },

      });
  
      if (response.ok) {
        console.log('Token válido');

        return {

          loggedIn: true,
          nome: localStorage.getItem('nome') || '',
          email: localStorage.getItem('email') || '',

        };

      } else {
        console.error('Erro ao validar o token:', response.statusText);
  
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          localStorage.removeItem('nome');

        }
  
        return { loggedIn: false, nome: '', email: '' };

      }

    } catch (error) {
      console.error('Erro ao validar o token:', error);
  
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('nome');
        
      }
  
      return { loggedIn: false, nome: '', email: '' };
    }
  }
  