
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const Tabs = (topics) => {
    const topicsDiv = document.createElement('div')
    topicsDiv.classList.add('topics')
  
    for (const topic of topics) {
      const tab = document.createElement('div')
      tab.classList.add('tab')
      tab.textContent = topic
  
      topicsDiv.appendChild(tab)
    }
  
    return topicsDiv
}
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabsAppender =  (selector) => {
    return new Promise ((resolve, reject) => {
      fetch (`http://localhost:5001/api/topics` )
      .then (response => response.json())
      .then(data => {
        const topicsArray = data.topics

        const tabComponent = Tabs(topicsArray)
        const targetElement = document.querySelector(selector)

        if (targetElement) {
          targetElement.appendChild(tabComponent)
          resolve()
        }else {
          reject('Target Element Not Found')
        }
      })
      .catch(error => {
        reject('Error fetching data' + error)
      })
    })
  }



export { Tabs, tabsAppender }


