<h1 align="center">Display Random Tip</h1>

<p>Program for display a tip from a list. The tip is chosen randomized and will never repeat yourself until the end of the list.</p>

<figure>
  <img src="Screen.JPG">
</figure>

<p>The main code is the file <code>display-tip.js</code> where one function have the responsability of listen the "click" event and trigger others 4 functions (file <code>js/functions</code>):</p>

<ul>
  <li><code>checkNum</code> = call the function <code>randomGenerator</code> (to generate a random number) and check if the random number wasn't repeated.</li>
  <li><code>showTip</code> = display the tip;</li>
  <li><code>saveLocalStorage</code> = save the random number in local storage;</li>
  <li><code>clearLocalStorage</code> = clear the local storage when all the datas in the file tip.js were displayed.</li>
</ul>
