import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//uso del hook useEffect
export function Article() {
  useEffect(() => {
    const burbuja_p = document.querySelector('.burbuja_p');
    burbuja_p.classList.add('activado');
  }, []);

  return (
    <section className="burbuja_border">
      <div className="burbuja">
        <h1 className="burbuja_title">Coco4lunas</h1>
        <p className="burbuja_p">Aceites 100% orgánicos</p>
        <Link to="/catalogo" className="burbuja_link">Ver catálogo</Link>
      </div>
    </section>
  );
}

