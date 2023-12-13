const toggleMenu = document.querySelector('.toggle-menu');
const sidebarContent = document.querySelector('.sidebar-content');
const sectionContainer = document.querySelectorAll('section');
const navLinksContainer = document.querySelectorAll('aside nav a');
const copyImg = document.querySelector('img[src="./assets/image/icon/copy.png"]');
const spanElements = document.querySelectorAll('.content .list-style .code-snippet span');


function copyText(index) {
  const codeSnippets = document.getElementsByClassName('code-snippet');
  const currentSnippet = codeSnippets[index];
  const spanTexts = currentSnippet.querySelectorAll('span');
  let copiedText = '';

  spanTexts.forEach(function (spanText) {
    copiedText += spanText.textContent + '\n';
  });

  navigator.clipboard.writeText(copiedText).then(function () {
    const toast = currentSnippet.querySelector('.toast');
    toast.classList.add('show');

    setTimeout(function () {
      toast.classList.remove('show');
    }, 2000);
  });
}