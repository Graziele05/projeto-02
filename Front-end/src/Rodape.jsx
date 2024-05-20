import React from 'react';
import './Rodape.css'; // Importe seu arquivo CSS

function Rodape() {
  return (
    <footer className="rodape">
      <p>&copy; {new Date().getFullYear()} Prefeitura Alto Santo da Glória. Todos os direitos reservados.</p>
      <a href="https://www.instagram.com">
      <img className='imgrodape' src="/Front-end/public/instagram.png" alt="imgrodape" />
      </a>
      <a href="https://www.facebook.com">
      <img className='imgrodape' src="/Front-end/public/facebook.png" alt="imgrodape" />
      </a>
      <a href="https://www.instagram.com">
      <img className='imgrodape' src="/Front-end/public/telegram.png" alt="imgrodape" />
      </a>
    </footer>
   
  );
}

export default Rodape;