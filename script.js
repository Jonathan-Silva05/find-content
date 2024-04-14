
function findText() {
  const searchText = document.getElementById('searchText').value;
  const textDocuments = document.querySelectorAll('.textDocument');

  textDocuments.forEach(doc => {
    if (searchText) {
      let innerHTML = doc.innerHTML.replace(/<span class="highlight">([^<]+)<\/span>/gi, '$1');
      const match = new RegExp('(' + searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      innerHTML = innerHTML.replace(match, '<span class="highlight">$1</span>');
      doc.innerHTML = innerHTML;
    } else {
      doc.innerHTML = doc.innerHTML.replace(/<span class="highlight">([^<]+)<\/span>/gi, '$1');
    }
  });
}

document.addEventListener('keyup', findText);
