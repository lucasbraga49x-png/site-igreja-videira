
function publicar() {
    
  const dataInput = document.getElementById('data').value;
  const arquivoInput = document.getElementById('arquivo').files[0];

  
  if (!dataInput || !arquivoInput) {
    alert("Por favor, preencha a data e anexe o PDF.");
    return;
  }

  
  const [ano, mesNumero, dia] = dataInput.split('-'); 
  const dataFormatada = `${dia}/${mesNumero}/${ano}`;

  const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const nomeMes = nomesMeses[parseInt(mesNumero) - 1]; 
  
  const idContainerMes = `mes-${mesNumero}-${ano}`;

  const sectionPdfs = document.getElementById('section');
  let containerDoMes = document.getElementById(idContainerMes);

  if (!containerDoMes) {
    containerDoMes = document.createElement('div');
    containerDoMes.className = 'mes';
    containerDoMes.id = idContainerMes;

    const tituloH4 = document.createElement('h4');
    tituloH4.textContent = `${nomeMes} de ${ano}`;
    
    containerDoMes.appendChild(tituloH4);
    sectionPdfs.appendChild(containerDoMes);
  }

  const arquivoURL = URL.createObjectURL(arquivoInput);

  const cardHTML = `
    <div class="pdf-card">
      <p>${dataFormatada}</p>
      <button onclick="baixar('${arquivoURL}')">Baixar PDF</button>
    </div>
  `;

 
  containerDoMes.insertAdjacentHTML('beforeend', cardHTML);

 
  document.getElementById('data').value = '';
  document.getElementById('arquivo').value = '';
}


function baixar(urlPdf) {

  window.open(urlPdf, '_blank');
}