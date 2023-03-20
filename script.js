const urlInput = document.getElementById('url')
const downloadButton = document.getElementById('download')

downloadButton.addEventListener('click', () => {
  const url = urlInput.value
  const downloadUrl = `http://127.0.0.1:8080/download?url=${url}`
  window.open(downloadUrl)
})