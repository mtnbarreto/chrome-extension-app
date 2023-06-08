chrome.action.onClicked.addListener(function () {
  const incrementPage = chrome.runtime.getURL('/src/pages/increment/index.html')
  chrome.tabs.create({ url: incrementPage })
})
