// app.js

function updateSections() {
  const concepto = document.getElementById('concepto').value;

  // Mapa de sección a conceptos que la muestran
  const rules = {
    'datos-generales':      ['Ingreso','Gasto','Inversión','Préstamo','Transferencia'],
    'info-financiera':      ['Ingreso','Gasto','Inversión','Préstamo','Transferencia'],
    'cuentas-saldos':       ['Ingreso','Gasto','Inversión','Préstamo','Transferencia'],
    'facturacion':          ['Ingreso','Gasto']
  };

  Object.entries(rules).forEach(([sectionId, allowed]) => {
    const fs = document.getElementById(sectionId);
    const show = allowed.includes(concepto);
    fs.style.display = show ? 'block' : 'none';

    // Desactiva required en inputs ocultos y reactívalos si aparecen
    fs.querySelectorAll('input, select').forEach(el => {
      if (!show) {
        el.removeAttribute('required');
      } else if (el.dataset.origRequired === 'true') {
        el.setAttribute('required', '');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Marca qué campos eran originalmente required
  document.querySelectorAll('input[required], select[required]').forEach(el => {
    el.dataset.origRequired = 'true';
  });

  // Inicial y al cambiar concepto
  updateSections();
  document.getElementById('concepto')
    .addEventListener('change', updateSections);

  document.getElementById('backoffice-form')
    .addEventListener('submit', event => {
      event.preventDefault();
      alert('Formulario OK — procederemos a guardar offline');
    });
});
