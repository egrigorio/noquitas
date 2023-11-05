import React, { useEffect, useState } from 'react';

function ContadorSemanas() {
  const dataReferencia = new Date('2022-12-14');
  const [contadorSemanas, setContadorSemanas] = useState(0);

  useEffect(() => {
    const dataAtual = new Date();
    const diferencaEmMilissegundos = dataAtual - dataReferencia;
    const semanas = Math.floor(diferencaEmMilissegundos / (7 * 24 * 60 * 60 * 1000));
    setContadorSemanas(semanas);
  }, []);

  return (
    <a href="#">
      <h1 className='text-black dark:text-white'>Semana {contadorSemanas}</h1>
    </a>
  );
}

export default ContadorSemanas;
