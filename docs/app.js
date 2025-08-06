// app.js

// Función para mostrar/ocultar secciones según el concepto
function updateSections() {
  const concepto = document.getElementById('concepto').value;
  document.querySelectorAll('fieldset[data-showif]').forEach(fs => {
    const legend = fs.querySelector('legend').textContent;
    let show = true;
    // Lógica de show-if por sección
    if (legend === 'Facturación') {
      show = (concepto === 'Ingreso' || concepto === 'Gasto');
    }
    fs.style.display = show ? 'block' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Inicialmente ocultamos campos de Facturación
  updateSections();
  // Cada vez que cambie concepto, actualizamos
  document.getElementById('concepto')
    .addEventListener('change', updateSections);

  // Manejo de envío del formulario
  document.getElementById('backoffice-form')
    .addEventListener('submit', event => {
      event.preventDefault();
      // Aquí iremos integrando IndexedDB y Workbox en Fase 3
      alert('Formulario listo para procesar (próxima fase)');
    });
});
