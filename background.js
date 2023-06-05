
chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: 'pages/index.html' });
});