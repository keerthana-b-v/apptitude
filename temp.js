
const data = {
  sdt: {
    easy: [
      {q:"A train travels 60 km in 1 hour. How far in 3 hours?", a:"180 km", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use D = S &times; T</span><br><code>60 &times; 3 = <strong>180 km</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; Speed &times; Time = Distance. Same speed, more time = more distance!</div>`},
      {q:"A car covers 120 km in 2 hours. What is its speed?", a:"60 km/h", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use S = D &divide; T</span><br><code>120 &divide; 2 = <strong>60 km/h</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; Cover Distance with your finger in D=S&times;T &rarr; S = D&divide;T</div>`},
      {q:"A person walks at 5 km/h for 3 hours. Distance?", a:"15 km", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use D = S &times; T</span><br><code>5 &times; 3 = <strong>15 km</strong></code></div></div></div>`},
      {q:"A bus covers 200 km in 4 hours. Speed?", a:"50 km/h", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use S = D &divide; T</span><br><code>200 &divide; 4 = <strong>50 km/h</strong></code></div></div></div>`},
      {q:"At 60 km/h, how long to travel 300 km?", a:"5 hours", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>300 &divide; 60 = <strong>5 hours</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; Cover Time in D=S&times;T &rarr; T = D&divide;S</div>`},
      {q:"Convert 72 km/h to m/s.", a:"20 m/s", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Multiply by 5/18</span><br><code>72 &times; 5/18 = <strong>20 m/s</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; km/h &rarr; m/s: multiply by 5/18 &nbsp;(or divide by 3.6)</div>`},
      {q:"Convert 15 m/s to km/h.", a:"54 km/h", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Multiply by 18/5</span><br><code>15 &times; 18/5 = <strong>54 km/h</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; m/s &rarr; km/h: multiply by 18/5 &nbsp;(or multiply by 3.6)</div>`},
      {q:"A cyclist covers 90 km in 3 hours. Speed?", a:"30 km/h", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use S = D &divide; T</span><br><code>90 &divide; 3 = <strong>30 km/h</strong></code></div></div></div>`},
      {q:"At 40 km/h, how far in 2.5 hours?", a:"100 km", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use D = S &times; T</span><br><code>40 &times; 2.5 = <strong>100 km</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; 40&times;2 = 80, 40&times;0.5 = 20 &rarr; 80+20 = 100</div>`},
      {q:"Time to cover 450 km at 90 km/h?", a:"5 hours", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>450 &divide; 90 = <strong>5 hours</strong></code></div></div></div>`},
      {q:"Two cities 240 km apart. Car at 80 km/h. Time to reach?", a:"3 hours", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>240 &divide; 80 = <strong>3 hours</strong></code></div></div></div>`},
      {q:"A train 100m long passes a pole at 36 km/h. Time taken?", a:"10 seconds", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Convert speed to m/s</span><br><code>36 &times; 5/18 = <strong>10 m/s</strong></code></div></div><div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Time = Distance &divide; Speed (passing a pole = train length only)</span><br><code>100 &divide; 10 = <strong>10 seconds</strong></code></div></div></div>`},
      {q:"A person walks 4 km/h. Time to walk 1 km?", a:"15 minutes", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Find time in hours</span><br>T = D &divide; S &nbsp;&rarr;&nbsp; <code>1 &divide; 4 = <strong>1/4 hour</strong></code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Convert fraction to decimal</span><br><code>1/4 = <strong>0.25 hours</strong></code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Convert hours &rarr; minutes &nbsp;(&times; 60)</span><br><code>0.25 &times; 60 = <strong>15 minutes</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Think of a clock face &mdash; one-quarter of 60 minutes = <strong>15 min</strong></div>
      `},
      {q:"Car travels 150 km in 2.5 hours. Speed?", a:"60 km/h", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Identify values</span><br>Distance = <code>150 km</code> &nbsp;&bull;&nbsp; Time = <code>2.5 hours</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Set up the formula</span><br>Speed = Distance &divide; Time &nbsp;&rarr;&nbsp; <code>150 &divide; 2.5</code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Eliminate the decimal &mdash; double both numbers</span><br><code>(150&times;2) &divide; (2.5&times;2) = 300 &divide; 5 = <strong>60 km/h</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Doubling top <em>and</em> bottom keeps the ratio the same &mdash; it just makes the division clean!</div>
      `},
      {q:"At 50 km/h for 4 hours, distance covered?", a:"200 km", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use D = S &times; T</span><br><code>50 &times; 4 = <strong>200 km</strong></code></div></div></div>`},
      {q:"Bike at 45 km/h. Time for 90 km?", a:"2 hours", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>90 &divide; 45 = <strong>2 hours</strong></code></div></div></div>`},
      {q:"Convert 108 km/h to m/s.", a:"30 m/s", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Multiply by 5/18</span><br><code>108 &times; 5/18 = <strong>30 m/s</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; Simplify first: 108/18 = 6, then 6&times;5 = 30</div>`},
      {q:"A runs 5 km in 25 minutes. Speed in km/h?", a:"12 km/h", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Convert minutes &rarr; hours</span><br><code>25 min = 25/60 hours</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Set up Speed formula</span><br><code>Speed = 5 &divide; (25/60)</code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Flip and multiply (dividing by a fraction)</span><br><code>5 &times; (60/25) = 300/25 = <strong>12 km/h</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Dividing by a fraction = multiply by its reciprocal &mdash; flip the bottom and multiply!</div>
      `},
      {q:"Car covers 350 km at 70 km/h. Time?", a:"5 hours", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>350 &divide; 70 = <strong>5 hours</strong></code></div></div></div>`},
      {q:"Walking at 6 km/h, time for 9 km?", a:"1.5 hours (90 min)", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use T = D &divide; S</span><br><code>9 &divide; 6 = <strong>1.5 hours = 90 min</strong></code></div></div></div>`},
    ],
    hard: [
      {q:"A goes from A to B at 40 km/h and returns at 60 km/h. Average speed for the whole journey?", a:"48 km/h", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use Harmonic Mean formula for equal distances</span><br><code>Avg = 2S₁S₂ &divide; (S₁+S₂)</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Plug in values</span><br><code>2 &times; 40 &times; 60 &divide; (40+60) = 4800 &divide; 100 = <strong>48 km/h</strong></code></div></div>
        </div>
        <div class="sol-note"><span class="sol-note-lbl">&#x26A0; Classic Trap</span>People average 40 and 60 directly &rarr; get 50 km/h &mdash; <strong>WRONG!</strong> More time is spent at the slower speed, so the average is always closer to the lower speed.</div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Equal distance trips: always use 2ab/(a+b), never (a+b)/2</div>
      `},
      {q:"Two trains of 100m and 150m length approach each other at 60 km/h and 40 km/h. Time to completely cross?", a:"9 seconds", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find the Total Distance</span><br>
              Both trains must pass each other completely — front to back. Add both lengths.<br>
              <code>100 m + 150 m = <strong>250 m</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Find the Relative Speed</span><br>
              Trains move <em>towards</em> each other → speeds add up.<br>
              <code>60 + 40 = <strong>100 km/h</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2b</span>
            <div>
              <span class="sol-lbl">Convert km/h → m/s &nbsp;(multiply by 5/18)</span><br>
              Distance is in metres, so speed must be too.<br>
              <code>100 × 5/18 = <strong>250/9 m/s</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Calculate Time = Distance ÷ Speed</span><br>
              <code>250 ÷ (250/9) = 250 × 9/250 = <strong>9 seconds</strong></code><br>
              The 250s cancel out completely!
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Always convert km/h → m/s when distance is in metres. Magic fraction: <strong>× 5/18</strong></div>
      `},
      {q:"Train 200m long at 54 km/h crosses a 300m bridge. Time?", a:"33.3 seconds", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Convert Speed: km/h → m/s &nbsp;(× 5/18)</span><br>
              Distance is in metres, so speed must match.<br>
              <code>54 × 5/18 = 3 × 5 = <strong>15 m/s</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Find Total Distance</span><br>
              Train must travel its own length <em>plus</em> the bridge to fully clear it.<br>
              <code>200 m + 300 m = <strong>500 m</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Calculate Time = Distance ÷ Speed</span><br>
              <code>500 ÷ 15 = 100/3 = <strong>33.3 seconds</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; A train crossing anything = train length + object length. It must fully clear, not just reach!</div>
      `},
      {q:"A and B start from the same point in opposite directions at 5 and 7 km/h. Distance between them after 3 hours?", a:"36 km", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find Relative Speed</span><br>
              Opposite directions → speeds <em>add</em> up.<br>
              <code>5 km/h + 7 km/h = <strong>12 km/h</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Calculate Total Distance</span><br>
              <code>12 km/h × 3 hours = <strong>36 km</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x1F4CC; Visualise it</span>
          A travels: <code>5 × 3 = 15 km</code> &nbsp;&larr;&nbsp; &bull; &nbsp;&rarr;&nbsp; B travels: <code>7 × 3 = 21 km</code><br>
          Total gap = <code>15 + 21 = <strong>36 km</strong></code>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Opposite directions → add speeds. Same direction → subtract speeds.</div>
      `},
      {q:"Two trains start simultaneously from A and B (300 km apart) towards each other at 70 and 80 km/h. When do they meet?", a:"2 hours", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Towards each other &rarr; Add speeds</span><br>
              <code>70 + 80 = <strong>150 km/h</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Time = Distance &divide; Combined Speed</span><br>
              <code>300 &divide; 150 = <strong>2 hours</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A1; Even Faster — 3 Second Mental Process</span>
          Towards each other &rArr; add speeds &nbsp;&bull;&nbsp;
          <code>70 + 80 = 150</code> &nbsp;&bull;&nbsp;
          <code>300 &divide; 150 = <strong>2</strong></code>
        </div>
        <div class="sol-table-wrap">
          <div class="sol-table-lbl">&#x1F4CB; Pattern Cheat Sheet</div>
          <table class="sol-table">
            <thead><tr><th>Situation</th><th>What to do</th></tr></thead>
            <tbody>
              <tr><td>Towards each other</td><td><strong>Add</strong> speeds</td></tr>
              <tr><td>Same direction</td><td><strong>Subtract</strong> speeds</td></tr>
              <tr><td>Find Time</td><td>Distance &divide; Speed</td></tr>
            </tbody>
          </table>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; This pattern solves every "when do they meet" question in under 3 seconds!</div>
      `},
      {q:"A thief runs at 10 km/h. Police starts chasing 15 minutes later at 15 km/h. When is thief caught?", a:"30 minutes after police start", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Find thief's head start (15 min = 15/60 hr)</span><br><code>10 &times; 15/60 = <strong>2.5 km</strong></code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Relative speed (same direction &rarr; subtract)</span><br><code>15 &minus; 10 = <strong>5 km/h</strong></code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Time to close the gap</span><br><code>2.5 &divide; 5 = 0.5 hr = <strong>30 minutes</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Head start gap &divide; relative speed = time to catch. Same direction always subtract speeds!</div>
      `},
      {q:"A train passes a 200m platform in 20 sec and a man standing on it in 12 sec. Find the train's length.", a:"300 m", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Let train length = L. Speed = L &divide; 12</span><br><code>Speed = L/12</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Crossing platform: Speed = (L+200) &divide; 20</span><br><code>L/12 = (L+200)/20</code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Cross-multiply and solve</span><br><code>20L = 12L + 2400 &rarr; 8L = 2400 &rarr; L = <strong>300 m</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Same speed, two equations &rarr; set them equal and solve for the unknown!</div>
      `},
      {q:"Ratio of speeds of A and B is 3:5. If B covers 200 km, distance A covers in the same time?", a:"120 km", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Same time &rarr; distance ratio = speed ratio</span><br><code>A : B = 3 : 5</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">If B = 200 km, find A</span><br><code>A = (3/5) &times; 200 = <strong>120 km</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Same time &rarr; Distance &prop; Speed. Faster = more distance in same time.</div>
      `},
      {q:"A car covers first 150 km at 50 km/h and next 150 km at 75 km/h. Average speed for whole journey?", a:"60 km/h", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Equal distances &rarr; use harmonic mean</span><br><code>Avg = 2 &times; 50 &times; 75 &divide; (50+75)</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Calculate</span><br><code>7500 &divide; 125 = <strong>60 km/h</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Equal distances &rarr; 2ab/(a+b). Unequal distances &rarr; Total D &divide; Total T.</div>
      `},
      {q:"A train crosses a pole in 9 sec and a 225m platform in 18 sec. Speed of train?", a:"25 m/s (90 km/h)", t:`
        <div class="sol-steps">
          <div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Pole: train covers its own length L in 9 sec</span><br><code>Speed = L/9</code></div></div>
          <div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Platform: covers L+225 in 18 sec. Set speeds equal</span><br><code>L/9 = (L+225)/18 &rarr; 18L = 9L+2025 &rarr; L = <strong>225 m</strong></code></div></div>
          <div class="sol-step"><span class="sol-n">3</span><div><span class="sol-lbl">Find Speed</span><br><code>225 &divide; 9 = <strong>25 m/s = 90 km/h</strong></code></div></div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Notice 18 = 2&times;9 &rarr; double time means double distance &rarr; L+225 = 2L &rarr; L=225. Elegant shortcut!</div>
      `}
    ]
  },
  pct: {
    easy: [
      {q:"Find 10% of 500.", a:"50", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Move the decimal one place left</span><br>
              10% of any number = just shift the decimal left by 1.<br>
              <code>500. &rarr; 50. = <strong>50</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">To get 20% — double it</span><br>
              <code>50 &times; 2 = <strong>100</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A1; Decimal Shortcut Pattern</span>
          10% &rarr; move decimal left &nbsp;&bull;&nbsp; 1% &rarr; move decimal left <em>twice</em> &nbsp;&bull;&nbsp; 20% &rarr; 10% &times; 2
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; 10% is your anchor — build every other % from it!</div>
      `},
      {q:"Find 20% of 200.", a:"40", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of 200 = 20 (move decimal). Double it for 20%.</span><br><code>20 &times; 2 = <strong>40</strong></code></div></div></div>`},
      {q:"15% discount on ₹400. Final price?", a:"₹340", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find 10% &mdash; move decimal left</span><br>
              <code>₹400 &rarr; ₹<strong>40</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Find 5% &mdash; half of 10%</span><br>
              <code>₹40 &divide; 2 = ₹<strong>20</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Total 15% discount = 10% + 5%</span><br>
              <code>₹40 + ₹20 = ₹<strong>60</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Final Price = Original &minus; Discount</span><br>
              <code>₹400 &minus; ₹60 = ₹<strong>340</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Build any % from 10%: &nbsp;5% = half of 10% &nbsp;&bull;&nbsp; 15% = 10% + 5% &nbsp;&bull;&nbsp; 25% = 10%+10%+5%</div>
      `},
      {q:"Find 25% of 80.", a:"20", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find 50% first &mdash; just halve it</span><br>
              <code>80 &divide; 2 = <strong>40</strong> &nbsp;(that's 50%)</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Cut it in half again for 25%</span><br>
              <code>40 &divide; 2 = <strong>20</strong> &nbsp;(that's 25%)</code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A1; Halving Trick</span>
          25% = half of half &nbsp;&bull;&nbsp; So 25% of anything = number &divide; 4
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; 25% = &frac14; &nbsp;&bull;&nbsp; 50% = &frac12; &nbsp;&bull;&nbsp; 75% = &frac34; &nbsp;— memorise these fractions!</div>
      `},
      {q:"Find 30% of 150.", a:"45", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of 150 = 15. Triple it for 30%.</span><br><code>15 &times; 3 = <strong>45</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; 30% = 3 &times; 10%. Find 10% first, then multiply!</div>`},
      {q:"A shirt costs ₹600 with 10% discount. Final price?", a:"₹540", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Find 10% discount amount</span><br><code>₹600 &rarr; ₹<strong>60</strong> discount</code></div></div><div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">Subtract</span><br><code>₹600 &minus; ₹60 = ₹<strong>540</strong></code></div></div></div>`},
      {q:"50 is what percent of 200?", a:"25%", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Use (Part &divide; Whole) &times; 100</span><br><code>(50 &divide; 200) &times; 100 = 0.25 &times; 100 = <strong>25%</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; 50/200 = 1/4 = 25%. Simplify the fraction first!</div>`},
      {q:"Price increases from ₹400 to ₹500. Percentage increase?", a:"25%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find how much it increased</span><br>
              <code>₹500 &minus; ₹400 = ₹<strong>100</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Compare increase with the original price</span><br>
              What fraction is ₹100 of ₹400?<br>
              <code>100 &divide; 400 = <strong>1/4</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Convert fraction to percentage</span><br>
              <code>1/4 = <strong>25%</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-table-wrap">
          <div class="sol-table-lbl">&#x1F4CB; % Change Formula</div>
          <table class="sol-table">
            <thead><tr><th>Type</th><th>Formula</th></tr></thead>
            <tbody>
              <tr><td>% Increase</td><td>(New &minus; Old) &divide; Old &times; 100</td></tr>
              <tr><td>% Decrease</td><td>(Old &minus; New) &divide; Old &times; 100</td></tr>
            </tbody>
          </table>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Always divide by the <strong>original</strong> (old) value — never the new one!</div>
      `},
      {q:"Find 5% of 1000.", a:"50", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of 1000 = 100. Halve it for 5%.</span><br><code>100 &divide; 2 = <strong>50</strong></code></div></div></div>`},
      {q:"What is 12% of 250?", a:"30", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of 250 = 25</span><br><code>25</code></div></div><div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">2% = 1% &times; 2. 1% of 250 = 2.5 &rarr; 2% = 5</span><br><code>25 + 5 = <strong>30</strong></code></div></div></div><div class="sol-tip">&nbsp;&#128161;&nbsp; 12% = 10% + 2%. Build from your anchor!</div>`},
      {q:"₹800 with 20% discount. Discount amount?", a:"₹160", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of ₹800 = ₹80. Double it for 20%.</span><br><code>₹80 &times; 2 = ₹<strong>160</strong></code></div></div></div>`},
      {q:"Price drops from ₹200 to ₹150. Percentage decrease?", a:"25%", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">Find the drop</span><br><code>₹200 &minus; ₹150 = ₹<strong>50</strong></code></div></div><div class="sol-step"><span class="sol-n">2</span><div><span class="sol-lbl">% = (drop &divide; original) &times; 100</span><br><code>(50 &divide; 200) &times; 100 = <strong>25%</strong></code></div></div></div>`},
      {q:"Find 40% of 75.", a:"30", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of 75 = 7.5. Multiply by 4 for 40%.</span><br><code>7.5 &times; 4 = <strong>30</strong></code></div></div></div>`},
      {q:"A product at ₹1000, 15% off. Final price?", a:"₹850", t:`<div class="sol-steps"><div class="sol-step"><span class="sol-n">1</span><div><span class="sol-lbl">10% of ₹1000 = ₹100. 5% = ₹50. Total 15% = ₹150.</span><br><code>₹1000 &minus; ₹150 = ₹<strong>850</strong></code></div></div></div>`},
      {q:"60 out of 300 as a percentage?", a:"20%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Split 300 into blocks of 100</span><br>
              Imagine 300 as 3 equal blocks:<br>
              <div class="sol-blocks"><span class="sol-block">100</span><span class="sol-block">100</span><span class="sol-block">100</span></div>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Share 60 equally across all 3 blocks</span><br>
              <code>60 &divide; 3 = <strong>20</strong> per block</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Each block of 100 gets 20 &rarr; that is 20%</span><br>
              <div class="sol-blocks"><span class="sol-block sol-block-filled">20</span><span class="sol-block sol-block-filled">20</span><span class="sol-block sol-block-filled">20</span></div>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; % means &ldquo;per 100&rdquo; &mdash; so just find how much lands in each block of 100!</div>
      `},
      {q:"Find 35% of 200.", a:"70", t:"200×35/100 = 70"},
      {q:"₹250 with 8% discount. Final price?", a:"₹230", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find 10% &mdash; move decimal left</span><br>
              <code>₹250 &rarr; ₹<strong>25</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Find 1% &mdash; move decimal left twice</span><br>
              <code>₹250 &rarr; ₹<strong>2.5</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Find 2% &mdash; double the 1%</span><br>
              <code>₹2.5 &times; 2 = ₹<strong>5</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">8% = 10% &minus; 2% &rarr; subtract</span><br>
              <code>₹25 &minus; ₹5 = ₹<strong>20 discount</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">5</span>
            <div>
              <span class="sol-lbl">Final Price = Original &minus; Discount</span><br>
              <code>₹250 &minus; ₹20 = ₹<strong>230</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Build any awkward % from 10% and 1%: &nbsp;8% = 10% &minus; 2% &nbsp;&bull;&nbsp; 15% = 10% + 5% &nbsp;&bull;&nbsp; 12% = 10% + 2%</div>
      `},
      {q:"Price goes from ₹500 to ₹600. Percentage increase?", a:"20%", t:"Increase = 100. (100/500)×100 = 20%"},
      {q:"Find 75% of 120.", a:"90", t:"120×0.75 = 90. Shortcut: 75% = ¾. 120×3/4 = 90"},
      {q:"18 is what percent of 90?", a:"20%", t:"(18/90)×100 = 20%"}
    ],
    hard: [
      {q:"Successive discounts of 20% and 10% on ₹1000. Final price?", a:"₹720", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Apply 20% discount on ₹1000</span><br>
              10% of ₹1000 = ₹100 &nbsp;&rarr;&nbsp; 20% = ₹200<br>
              <code>₹1000 &minus; ₹200 = ₹<strong>800</strong> &nbsp;(new price)</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Apply 10% discount on the NEW price ₹800</span><br>
              10% of ₹800 = ₹80<br>
              <code>₹800 &minus; ₹80 = ₹<strong>720</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; Common Trap</span>
          20% + 10% &ne; 30% off &mdash; each discount applies to a <em>smaller</em> price each time!<br>
          Equivalent single discount = <code>20 + 10 &minus; (20&times;10/100) = <strong>28%</strong></code>, not 30%.
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Always apply each discount one at a time to the <strong>current</strong> price, not the original!</div>
      `},
      {q:"Trader marks price 40% above cost price, gives 20% discount. Profit %?", a:"12%", t:"Let CP=100, MP=140, SP=140×0.8=112. Profit = 12. Profit% = 12%"},
      {q:"Price increased by 20% then decreased by 20%. Net change?", a:"4% decrease", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Start with ₹100 (any round number works)</span><br>
              <code>Original price = ₹<strong>100</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Increase by 20%</span><br>
              20% of ₹100 = ₹20<br>
              <code>₹100 + ₹20 = ₹<strong>120</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Decrease by 20% (of the NEW price ₹120)</span><br>
              10% of ₹120 = ₹12 &nbsp;&rarr;&nbsp; 20% = ₹24<br>
              <code>₹120 &minus; ₹24 = ₹<strong>96</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Find the net change</span><br>
              Started at ₹100, ended at ₹96 &rarr; lost ₹4<br>
              <code>₹4 out of ₹100 = <strong>4% decrease</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; Classic Exam Trap</span>
          Most people say <strong>0%</strong> change &mdash; WRONG! The second 20% applies to a bigger number, so the decrease is larger than the increase.
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; +x% then &minus;x% always gives a net <strong>loss</strong> of (x&sup2;/100)% &nbsp;&rarr;&nbsp; here: 20&sup2;/100 = <strong>4%</strong></div>
      `},
      {q:"A's salary is 25% more than B's. B's salary is what % less than A's?", a:"20%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Set B's salary = ₹100</span><br>
              <code>B = ₹<strong>100</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">A earns 25% more than B</span><br>
              25% of ₹100 = ₹25<br>
              <code>A = ₹100 + ₹25 = ₹<strong>125</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Find the difference</span><br>
              <code>A &minus; B = ₹125 &minus; ₹100 = ₹<strong>25</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Compare ₹25 to A's salary (not B's!)</span><br>
              <code>25 &divide; 125 = 1/5 = <strong>20%</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; The Catch</span>
          &ldquo;B is what % less than A&rdquo; &rarr; compare to <strong>A</strong> (the bigger number). <br>
          &ldquo;A is what % more than B&rdquo; &rarr; compare to <strong>B</strong> (the smaller number).
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Always compare to whoever the question asks <em>&ldquo;compared to&rdquo;</em> &mdash; that's always your denominator!</div>
      `},
      {q:"If 30% of x = 60, find 45% of x.", a:"90", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Find what 15% equals</span><br>
              If 30% = 60, then half of 30% must be half of 60.<br>
              <code>15% = 60 &divide; 2 = <strong>30</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Build up to 45% = 30% + 15%</span><br>
              <code>60 + 30 = <strong>90</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A1; No need to find x!</span>
          30% &rarr; 60 &nbsp;&bull;&nbsp; 15% &rarr; 30 &nbsp;&bull;&nbsp; 45% = 30% + 15% = <code>60 + 30 = <strong>90</strong></code>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Break the target % into chunks you already know. You can always halve, double, or add known values!</div>
      `},
      {q:"Two successive discounts of 15% and 10%. Single equivalent discount?", a:"23.5%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Apply 15% discount to ₹100</span><br>
              15% of ₹100 = ₹15<br>
              <code>₹100 &minus; ₹15 = ₹<strong>85</strong> &nbsp;(temporary price)</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Apply 10% discount to the new price ₹85</span><br>
              10% of ₹85 = ₹8.5<br>
              <code>₹85 &minus; ₹8.5 = ₹<strong>76.5</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Total money saved on ₹100</span><br>
              <code>₹15 + ₹8.5 = ₹<strong>23.5 saved</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Since we started with ₹100, savings = equivalent %</span><br>
              <code>Equivalent discount = <strong>23.5%</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; Why not 25%?</span>
          The second 10% cuts into the already-reduced ₹85, <em>not</em> the original ₹100 &mdash; so you save less than expected!
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Formula shortcut: a + b &minus; (a&times;b/100) &nbsp;&rarr;&nbsp; 15 + 10 &minus; 1.5 = <strong>23.5%</strong></div>
      `},
      {q:"Population increases by 10% every year. Population after 2 years from 10,000?", a:"12,100", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Start: 10,000</span><br>
              <code>Starting population = <strong>10,000</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">After Year 1 &mdash; add 10%</span><br>
              10% of 10,000 = 1,000 &nbsp;(just drop a zero!)<br>
              <code>10,000 + 1,000 = <strong>11,000</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">After Year 2 &mdash; add 10% of the NEW population</span><br>
              10% of 11,000 = 1,100<br>
              <code>11,000 + 1,100 = <strong>12,100</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; Don't add 20% directly!</span>
          20% of 10,000 = 2,000 &rarr; gives 12,000 &mdash; <strong>WRONG!</strong><br>
          Each year's growth builds on the previous year's total, not the original.
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Compound growth = multiply each year: &nbsp;<code>10,000 &times; 1.1 &times; 1.1 = 12,100</code></div>
      `},
      {q:"A number increased by 25% gives 100. What is the original number?", a:"80", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Visualise the original as 4 equal blocks (100%)</span><br>
              <div class="sol-blocks">
                <span class="sol-block">25%</span><span class="sol-block">25%</span><span class="sol-block">25%</span><span class="sol-block">25%</span>
              </div>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">A 25% increase adds one more block</span><br>
              <div class="sol-blocks">
                <span class="sol-block">25%</span><span class="sol-block">25%</span><span class="sol-block">25%</span><span class="sol-block">25%</span><span class="sol-block sol-block-filled">+25%</span>
              </div>
              <code style="margin-top:6px;display:inline-block">5 equal blocks = <strong>100</strong> (given)</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Find the value of 1 block</span><br>
              <code>100 &divide; 5 = <strong>20</strong> per block</code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Original = first 4 blocks</span><br>
              <code>20 &times; 4 = <strong>80</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Reverse trick: n &times; 1.25 = 100 &nbsp;&rarr;&nbsp; n = 100 &divide; 1.25 = <strong>80</strong>. Divide by the multiplier to reverse!</div>
      `},
      {q:"Shop gives 20% discount, still makes 20% profit. Mark up % over cost price?", a:"50%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Assume Cost Price (CP) = ₹100</span><br>
              <code>CP = ₹<strong>100</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">Find the Selling Price (SP) &mdash; 20% profit on CP</span><br>
              20% of ₹100 = ₹20<br>
              <code>SP = ₹100 + ₹20 = ₹<strong>120</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Find the Marked Price (MP) &mdash; 20% discount gives SP</span><br>
              SP = 80% of MP &nbsp;&rarr;&nbsp; 80% of MP = ₹120<br>
              If 80% = ₹120, then 40% = ₹60, then 20% = ₹30<br>
              <code>MP = ₹120 + ₹30 = ₹<strong>150</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Calculate the Markup %</span><br>
              Bought for ₹100, tagged at ₹150 &rarr; increase = ₹50<br>
              <code>₹50 on ₹100 = <strong>50% markup</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; SP = MP &times; 0.8 and SP = CP &times; 1.2 &nbsp;&rarr;&nbsp; MP = 1.5 &times; CP &rarr; <strong>50% above CP</strong></div>
      `},
      {q:"If A's income is 20% less than B's, then B's income is what % more than A's?", a:"25%", t:`
        <div class="sol-steps">
          <div class="sol-step">
            <span class="sol-n">1</span>
            <div>
              <span class="sol-lbl">Set B's income = ₹100</span><br>
              <code>B = ₹<strong>100</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">2</span>
            <div>
              <span class="sol-lbl">A earns 20% less than B</span><br>
              20% of ₹100 = ₹20<br>
              <code>A = ₹100 &minus; ₹20 = ₹<strong>80</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">3</span>
            <div>
              <span class="sol-lbl">Find the difference</span><br>
              <code>B &minus; A = ₹100 &minus; ₹80 = ₹<strong>20</strong></code>
            </div>
          </div>
          <div class="sol-step">
            <span class="sol-n">4</span>
            <div>
              <span class="sol-lbl">Compare ₹20 to A's income (not B's!)</span><br>
              <code>20 &divide; 80 = 1/4 = <strong>25%</strong></code>
            </div>
          </div>
        </div>
        <div class="sol-note">
          <span class="sol-note-lbl">&#x26A0; The Catch</span>
          &ldquo;B is what % <em>more</em> than A&rdquo; &rarr; compare to <strong>A</strong> (the smaller number).<br>
          &ldquo;A is what % <em>less</em> than B&rdquo; &rarr; compare to <strong>B</strong> (the bigger number).
        </div>
        <div class="sol-tip">&nbsp;&#128161;&nbsp; Always divide by whoever you're comparing <em>to</em> &mdash; that's your denominator!</div>
      `},
    ]
  },
  wt: {
    easy: [
      {q:"A completes work in 10 days. What fraction does A do in 1 day?", a:"1/10", t:"1 day work = 1/total days. Simple!"},
      {q:"A does work in 5 days, B in 10 days. How long together?", a:"10/3 ≈ 3.3 days", t:"Together = 1/5+1/10 = 3/10 per day. Time = 10/3 days"},
      {q:"5 workers complete in 10 days. How many days for 10 workers?", a:"5 days", t:"M×D = constant. 5×10 = 10×d → d=5. More workers = fewer days"},
      {q:"A does in 12 days, B in 6 days. Together?", a:"4 days", t:"1/12+1/6 = 1/12+2/12 = 3/12 = 1/4 per day → 4 days"},
      {q:"Pipe A fills in 6 hrs, Pipe B in 3 hrs. Together?", a:"2 hours", t:"1/6+1/3 = 1/6+2/6 = 3/6 = 1/2 per hr → 2 hrs"},
      {q:"A does in 8 days, B in 8 days. Together?", a:"4 days", t:"1/8+1/8 = 2/8 = 1/4 per day → 4 days. Same efficiency = half time"},
      {q:"10 men do in 20 days. 5 men take how many days?", a:"40 days", t:"10×20 = 5×d → d=40. Half workers = double days"},
      {q:"A does in 15 days. How much work done in 5 days?", a:"1/3 of work", t:"5 days × 1/15 per day = 5/15 = 1/3"},
      {q:"A and B together finish in 6 days. A alone in 9 days. B alone?", a:"18 days", t:"1/B = 1/6−1/9 = 3/18−2/18 = 1/18. B = 18 days"},
      {q:"A does in 20 days. What fraction in 4 days?", a:"1/5", t:"4 × 1/20 = 4/20 = 1/5"},
      {q:"8 workers do in 12 days. 12 workers take?", a:"8 days", t:"8×12 = 12×d → d=8"},
      {q:"A does in 6 hrs, B in 12 hrs. Together?", a:"4 hours", t:"1/6+1/12 = 2/12+1/12 = 3/12 = 1/4 → 4 hrs"},
      {q:"A and B together in 4 days. B alone in 12 days. A alone?", a:"6 days", t:"1/A = 1/4−1/12 = 3/12−1/12 = 2/12 = 1/6 → A = 6 days"},
      {q:"A does 1/4 of work in 3 days. Total time for A?", a:"12 days", t:"1/4 work in 3 days → full work in 12 days"},
      {q:"3 men do in 9 days. How many men for 3 days?", a:"9 men", t:"3×9 = x×3 → x=9"},
      {q:"Pipe fills in 8 hrs, empties in 12 hrs. Net time if both open?", a:"24 hours", t:"Net rate = 1/8−1/12 = 3/24−2/24 = 1/24 per hr → 24 hrs"},
      {q:"A is 2x faster than B. B takes 12 days. Together?", a:"4 days", t:"A is 2x faster so A takes 6 days. Together: 1/6+1/12 = 3/12 = 1/4 → 4 days"},
      {q:"15 workers finish in 8 days. How many days if 3 workers leave?", a:"10 days", t:"15×8 = 12×d → d=10"},
      {q:"A does in 18 days, B in 9 days. They work together 3 days. Work remaining?", a:"1/2 remaining", t:"3 days together: 3×(1/18+1/9) = 3×(1/18+2/18) = 3×3/18 = 1/2. So 1/2 left"},
      {q:"A can finish in 20 days. After 5 days B joins. B does in 20 days. Days to finish remaining?", a:"7.5 days", t:"A does 5/20=1/4 in 5 days. Remaining=3/4. Together rate=1/10/day. Days=3/4÷1/10=7.5"}
    ],
    hard: [
      {q:"A is 3 times as efficient as B. Together they finish in 6 days. A alone takes how many days?", a:"8 days", t:"A=3x efficient → A takes 1/3 of B's time. Let A=n days, B=3n days. n×3n/(n+3n)=6 → 3n/4=6 → n=8 days"},
      {q:"A+B complete in 12 days, B+C in 15 days, A+C in 20 days. All three together?", a:"10 days", t:"2(A+B+C)=1/12+1/15+1/20=5/60+4/60+3/60=12/60=1/5. So A+B+C=1/10 → 10 days"},
      {q:"30 men do work in 15 days. After 5 days, 10 men leave. How many more days to finish?", a:"15 days", t:"Total work=450 man-days. Done=30×5=150. Remaining=300. 20 men×d=300 → d=15 days"},
      {q:"A does in 20 days, B in 30 days. Work together 5 days, then A leaves. B finishes alone. Total days?", a:"22.5 days", t:"5 days together: 5×(1/20+1/30)=5×5/60=5/12 done. Remaining=7/12. B alone: (7/12)÷(1/30)=17.5 days. Total=22.5"},
      {q:"A alone in 10 days, B alone in 15 days. A leaves 2 days before completion. Total days?", a:"7.2 days", t:"Let total=d. A works (d−2) days, B works d days. (d−2)/10+d/15=1 → 3(d−2)+2d=30 → 5d=36 → d=7.2"},
      {q:"4 men or 6 women finish in 12 days. How many days for 2 men + 3 women?", a:"12 days", t:"4m=6w → 1m=1.5w. 2m+3w = 3w+3w = 6w → same as 6 women → 12 days"},
      {q:"A does in 12 days, B in 16 days. A works 3 days, then B joins. Days for both to finish remaining?", a:"5 1/7 days", t:"A's 3 days: 3/12=1/4. Remaining=3/4. Together rate=1/12+1/16=7/48. Days=(3/4)÷(7/48)=36/7≈5.1 days"},
      {q:"Pipe A fills in 12 hrs, B in 15 hrs, C empties in 10 hrs. All open together. When is tank full?", a:"20 hours", t:"Net=1/12+1/15−1/10 = 5/60+4/60−6/60 = 3/60 = 1/20 per hr → 20 hours"},
      {q:"A does work in 6 days, B in 8 days. They alternate daily starting with A. Total days?", a:"6¾ days", t:"Per 2-day cycle: 1/6+1/8=7/24. After 3 cycles(6 days)=21/24=7/8. Remaining=1/8. Day 7 is A's turn: 1/8÷1/6=3/4 day. Total=6¾"},
      {q:"6 men + 8 boys do in 10 days. 26 men + 48 boys do in 2 days. 15 men + 20 boys take?", a:"4 days", t:"60m+80b=1 and 52m+96b=1. Solving: 8m=16b→m=2b. 120b+80b=200b=1→b=1/200,m=1/100. 15m+20b=15/100+10/100=1/4→4 days"}
    ]
  }
};

const counters = {sdt:0, pct:0, wt:0};

function buildQs(topic, type, containerId) {
  const qs = data[topic][type];
  const el = document.getElementById(containerId);
  qs.forEach((item, i) => {
    const num = type==='easy' ? i+1 : i+21;
    const badge = type==='easy' ? '<span class="badge easy">easy</span>' : '<span class="badge tricky">tricky</span>';
    const div = document.createElement('div');
    div.className = 'q-card';
    div.innerHTML =
      '<div class="q-top" onclick="toggleQ(this,\'' + topic + '\')">' +
        '<span class="q-num">Q' + num + '</span>' +
        '<span class="q-text">' + item.q + '</span>' +
        badge +
      '</div>' +
      '<div class="q-ans" data-open="false">' +
        '<div class="ans-tag">Answer</div>' +
        '<div class="ans-val">' + item.a + '</div>' +
        '<div class="trick-tag">How to solve</div>' +
        '<div class="trick-val"></div>' +
      '</div>';
    div.querySelector('.trick-val').innerHTML = item.t;
    el.appendChild(div);
  });
}


function toggleQ(header, topic) {
  const ans = header.nextElementSibling;
  const isOpen = ans.dataset.open === 'true';
  if (!isOpen) {
    counters[topic]++;
    document.getElementById(topic+'-done').textContent = counters[topic];
  }
  ans.style.display = isOpen ? 'none' : 'block';
  ans.dataset.open = isOpen ? 'false' : 'true';
}

function show(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

buildQs('sdt','easy','sdt-easy');
buildQs('sdt','hard','sdt-hard');
buildQs('pct','easy','pct-easy');
buildQs('pct','hard','pct-hard');
buildQs('wt','easy','wt-easy');
buildQs('wt','hard','wt-hard');
