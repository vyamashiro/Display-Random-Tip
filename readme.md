<figure>
  <img src="Screen.JPG">
</figure>

<h1> Description </h1>

<p>Program for display a tip from a list. The tip is chosen randomized and will never repeat yourself until the end of the list.</p>

The main code is the file "display-tip.js" where one function have the responsability of listen the "click" event and trigger others 4 functions (file: js/functions):
<ol>
  <il>checkNum.js = call the function "randomGenerator" (to generate a random number) and check if the random number wasn't repeated.</il>
  <il>showTip.js = display the tip;</il>
  <il>saveLocalStorage.js = save the random number in local storage;</il>
  <il>clearLocalStorage.js = clear the local storage when all the datas in the file tip.js were displayed.</il>
</ol>
