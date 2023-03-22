
console.log("backgroud has started");
chrome.action.setBadgeBackgroundColor(
  {color: "red"},  // Green
  () => { /* ... */ },
);

// async function getCurrentTabId() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab.tabId;
// }

// chrome.action.setBadgeText(
//   {
//     text: tabId.getCurrentTabId().toString(), // string
//     // tabId: getTabId(), If the tabId property is omitted, the setting is treated as a global setting. Tab-specific settings take priority over any global settings.
//     tabId:tabId.getCurrentTabId()  // int
//   },
//   () => {}
// );

//                      "permissions": ["activeTab", "scripting"],
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['content.js']
//     function : myfunctionname
//   });
// });

chrome.action.disable();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete'){
    console.log(tab.url);
    if (tab.url.indexOf('http://10.240.1.89/academic_history') != -1){
      console.log('enable');
      chrome.action.enable(tabId);
      chrome.action.setBadgeText(
        {
          text: "run",
          // tabId: getTabId(), If the tabId property is omitted, the setting is treated as a global setting. Tab-specific settings take priority over any global settings.
          tabId:tabId
        },
        () => {}
      );
    }
    else{
      console.log('disable');
      chrome.action.disable(tabId);
    }
  }
});