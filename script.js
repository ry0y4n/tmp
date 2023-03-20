const startTimeInput = document.getElementById('start-time');
const durationInput = document.getElementById('duration');
const urlInput = document.getElementById('url');
const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', () => {
    const startTime = startTimeInput.value;
    const duration = durationInput.value;
    const url = urlInput.value;
    const downloadUrl = `http://127.0.0.1:8080/download?url=${url}&start_time=${startTime}&duration=${duration}`;
    window.open(downloadUrl);
});