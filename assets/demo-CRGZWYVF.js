const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-B_ZM8ane.js","assets/thinEngine.pure-DIEWnOrY.js","assets/engineStore-Bn2tApal.js","assets/logger-CuBYPcDK.js","assets/shaderStore-D-XQlhUT.js","assets/precisionDate-CcRlxfnG.js","assets/performanceConfigurator-UtxC_Odd.js","assets/internalTexture-Dlz1Grf0.js","assets/i18n-CSmcYFqR.js","assets/i18n-DUVMqsd7.css","assets/tools.pure-BMHvHWM0.js","assets/typeStore-BGi7uhG_.js","assets/decorators-BqhniYe3.js","assets/math.color.pure-1DMve2CK.js","assets/math.scalar.functions-lnL7TJ7T.js","assets/baseTexture.pure-DUnCnCDe.js","assets/effectRenderer.pure-CXyjPGEM.js","assets/demo-view-nA9c1WnU.js","assets/maze-Bu3irmjZ.js"])))=>i.map(i=>d[i]);
import{c as e,o as t,s as n}from"./i18n-CSmcYFqR.js";var r=`<main id="app" data-demo-panel="warehouse">
  <canvas id="scene" aria-label="3D MAPF simulation"></canvas>

  <section id="warehouse-startup" class="warehouse-startup glass" aria-labelledby="warehouse-startup-title">
    <div class="warehouse-startup-heading">
      <h2 id="warehouse-startup-title">Starting the simulation</h2>
      <span id="warehouse-startup-count" aria-live="polite"></span>
    </div>
    <progress id="warehouse-startup-progress" aria-labelledby="warehouse-startup-title"></progress>
    <ul id="warehouse-startup-tasks"></ul>
    <p id="warehouse-startup-notice" role="status" hidden></p>
  </section>

  <header class="demo-header topbar">
    <div class="demo-brand">
      <a class="demo-home" href="../">DMM-Demo</a>
    </div>
    <nav class="demo-tabs" aria-label="Demo views">
      <a href="./" data-demo-link="warehouse">Interactive warehouse</a>
      <a href="./maze.html" data-demo-link="maze">DMM communication</a>
      <a href="../EPIBT/">EPIBT-Demo</a>
    </nav>
    <div class="header-actions">
      <div class="demo-source connection"><span id="source-label">Demo source</span></div>
      <button class="lang-toggle" type="button" aria-label="Переключить на русский">RU</button>
      <details class="qr-links">
        <summary>QR links</summary>
        <div class="qr-panel" role="group" aria-label="Demo links">
          <strong>Explore DMM</strong>
          <div class="qr-grid">
            <a href="https://github.com/CognitiveAISystems/DMM" target="_blank" rel="noopener noreferrer" aria-label="Open the method implementation">
              <img src="../qr/method.svg" alt="QR code for the DMM implementation" width="128" height="128" />
              <span>Code</span><small>github.com/CognitiveAISystems/DMM</small>
            </a>
            <a href="https://cognitiveaisystems.github.io/MAPF-DEMO/DMM" target="_blank" rel="noopener noreferrer" aria-label="Open the live demo">
              <img src="../qr/demo.svg" alt="QR code for the live demo" width="128" height="128" />
              <span>Live demo</span><small>MAPF-DEMO/DMM</small>
            </a>
            <a href="https://arxiv.org/abs/2609.32019" target="_blank" rel="noopener noreferrer" aria-label="Open the paper">
              <img src="../qr/paper.svg" alt="QR code for the paper" width="128" height="128" />
              <span>Paper</span><small>arxiv.org/abs/2609.32019</small>
            </a>
          </div>
        </div>
      </details>
    </div>
  </header>

  <aside class="inspector glass">
    <section class="demo-guide" aria-label="About this demo">
      <p class="eyebrow">What to watch</p>
      <p>Agents carry pallets to unloading arms, refill empty ones, then return them to storage.</p>
      <p>Select an agent to inspect its task, steer it, or trigger a breakdown. Use Layout to edit pallets and agent count.</p>
    </section>
    <section class="agent-inspector">
      <div class="section-heading">
        <p class="eyebrow">Agent inspector</p>
        <button id="clear-selection" class="clear-selection" type="button" aria-label="Clear agent selection">×</button>
      </div>
      <div id="agent-empty" class="agent-empty">
        <span class="target-glyph">◎</span>
        <strong>Select an agent</strong>
        <small>Click an agent or its carried pallet</small>
      </div>
      <div id="agent-details" class="agent-details" hidden>
        <div class="agent-title-row">
          <strong id="selected-agent">Agent 000</strong>
          <span id="selected-agent-state" class="state-pill">Empty</span>
        </div>
        <button id="control-agent-button" class="control-agent-button" type="button" aria-pressed="false">Take control</button>
        <p id="agent-control-hint" class="agent-control-hint" hidden>Move the agent with WASD, the left stick, or the D-pad. Esc returns control to DMM.</p>
        <dl class="agent-facts">
          <div><dt>Pallet</dt><dd id="agent-pallet">—</dd></div>
          <div><dt>Position</dt><dd id="agent-position">—</dd></div>
        </dl>
        <ol id="task-route" class="route-card" role="list" aria-label="Task progress" hidden>
          <li><span>Pickup</span><strong></strong></li>
          <li><span>Unload</span><strong></strong></li>
          <li><span>Reload</span><strong></strong></li>
          <li><span>Return</span><strong></strong></li>
        </ol>
        <div class="agent-metrics">
          <div><strong id="agent-distance">0</strong><small>Cells travelled</small></div>
          <div><strong id="agent-waits">0</strong><small>Wait ticks</small></div>
          <div><strong id="agent-handoffs">0</strong><small>Unloads</small></div>
          <div><strong id="agent-completed">0</strong><small>Tasks done</small></div>
        </div>
        <button id="fail-agent-button" class="fail-agent-button" type="button">
          <span>⚠</span><span id="fail-agent-label">Break agent</span>
        </button>
      </div>
    </section>

    <section class="telemetry-panel">
      <p class="eyebrow">Live telemetry</p>
      <div class="telemetry-throughput">
        <div><span>Throughput</span><small>Tasks per step</small></div>
        <strong id="task-throughput-value">—</strong>
      </div>
      <div class="telemetry-grid">
        <div class="metric"><span id="completed-tasks-value">—</span><small>tasks done</small></div>
        <div class="metric"><span id="step-value">—</span><small>Environment steps</small></div>
        <div class="metric"><span id="latency-value">—</span><small>Inference, ms</small></div>
        <div class="metric"><span id="agents-value">100</span><small>Agents</small></div>
        <div class="metric"><span id="loaded-value">—</span><small>Loaded</small></div>
        <div class="metric"><span id="recovery-value">—</span><small>In recovery</small></div>
      </div>
      <div id="tow-status" class="tow-status" hidden><small>Recovery unit</small><strong id="tow-status-value"></strong></div>
    </section>

    <section class="legend">
      <span><i class="cyan"></i>Empty</span>
      <span><i class="violet"></i>Loaded</span>
      <span><i class="amber"></i>Waiting</span>
      <span><i class="green"></i>Handoff</span>
      <span><i class="red"></i>Failed</span>
      <span><i class="mint"></i>Recovery</span>
    </section>
  </aside>

  <aside id="layout-editor" class="layout-editor glass" hidden>
    <p class="eyebrow">Warehouse configuration</p>
    <h2>Pallet layout</h2>
    <p class="editor-copy">Click a cell to add or remove a pallet. Drag to paint. Pan with WASD or the left stick. Zoom with the wheel or L2/R2.</p>
    <div class="editor-stats">
      <div><small>Pallets</small><strong id="editor-pallet-count">—</strong></div>
      <div><small>Density</small><strong id="editor-density">—</strong></div>
    </div>
    <div class="editor-agent-control">
      <div class="editor-agent-header">
        <label for="editor-agent-number">Agents</label>
        <input id="editor-agent-number" type="number" min="1" max="1000" value="100" step="1" required aria-label="Number of agents">
      </div>
      <input id="editor-agent-count" type="range" min="1" max="1000" value="100" step="1" aria-label="Number of agents slider">
      <small>1 <span id="editor-agent-limit">1000 max</span></small>
    </div>
    <div id="editor-validation" class="editor-validation valid">
      <span></span><strong>Layout valid</strong>
      <small>Every pallet has a route to the service aisles.</small>
    </div>
    <div class="editor-legend">
      <span><i class="pallet-cell"></i>Pallet</span>
      <span><i class="aisle-cell"></i>Aisle</span>
      <span><i class="locked-cell"></i>Service zone</span>
    </div>
    <div class="editor-tools">
      <button id="editor-undo" type="button">↶ Undo</button>
      <button id="editor-reset" type="button">Reset</button>
      <button id="editor-clear" type="button">Clear</button>
    </div>
    <p id="editor-message" class="editor-message">Changes are applied to the local simulator.</p>
    <div class="editor-actions">
      <button id="editor-cancel" type="button">Cancel</button>
      <button id="editor-apply" class="primary" type="button">Apply &amp; restart</button>
    </div>
  </aside>

  <section class="controls glass">
    <button id="pause-button" class="primary" type="button"><span id="pause-icon">Ⅱ</span><span id="pause-label">Pause</span></button>
    <button id="stop-button" class="stop-button" type="button"><span>■</span><span>Stop</span></button>
    <label>
      <span>Agents</span>
      <select id="agent-count">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100" selected>100</option>
      </select>
    </label>
    <label class="speed-control">
      <span>Speed <output id="speed-value">1.0×</output></span>
      <input id="speed" type="range" min="0.25" max="5" value="1" step="0.25" />
    </label>
    <button id="layout-editor-button" class="layout-button" type="button"><span>▦</span><span>Layout</span></button>
    <button id="reset-camera" class="icon-button" type="button" title="Reset camera" aria-label="Reset camera">⌖</button>
  </section>

  <div id="gamepad-reticle" aria-hidden="true" hidden></div>
  <aside id="gamepad-help" class="gamepad-help glass" aria-label="Gamepad controls" hidden>
    <span><kbd>✕</kbd> Select at reticle</span>
    <span><kbd>L1 / R1</kbd> Switch agent</span>
    <span><kbd>○</kbd> Toggle manual control</span>
    <span><kbd>□</kbd> Clear selection</span>
    <span id="gamepad-touchpad-help"><kbd>Touchpad</kbd> Break agent</span>
    <span><kbd>Options</kbd> Pause / resume</span>
    <span><kbd>R3</kbd> Reset camera</span>
    <span><kbd>Create</kbd> Stop simulation</span>
    <span><kbd>L3</kbd> Open layout editor</span>
    <span><kbd>↑ / ↓</kbd> Simulation speed</span>
    <small>Left stick to move, right stick to orbit, L2/R2 to zoom</small>
    <small>Hold L2 + R2 in manual mode to change speed with ↑ / ↓.</small>
  </aside>
  <aside id="gamepad-editor-help" class="gamepad-help glass" aria-label="Layout editor gamepad controls" hidden>
    <span><kbd>✕</kbd> Add or remove pallet</span>
    <span><kbd>□</kbd> Undo edit</span>
    <span><kbd>↑ / ↓</kbd> Change agent count by 1</span>
    <span><kbd>← / →</kbd> Change agent count by 10</span>
    <span><kbd>Options</kbd> Apply &amp; restart</span>
    <span><kbd>○ / L3</kbd> Cancel</span>
    <small>Left stick to aim at a cell, L2/R2 to zoom</small>
  </aside>
  <div class="scanline"></div>
</main>
`,i=`<div id="maze-app" data-demo-panel="maze">
  <header class="demo-header">
    <div class="demo-brand">
      <a class="demo-home" href="../">DMM-Demo</a>
    </div>
    <nav class="demo-tabs" aria-label="Demo views">
      <a href="./" data-demo-link="warehouse">Interactive warehouse</a>
      <a href="./maze.html" data-demo-link="maze">DMM communication</a>
      <a href="../EPIBT/">EPIBT-Demo</a>
    </nav>
    <div class="header-actions">
      <div id="maze-source" class="demo-source"><span>Loading model</span></div>
      <button class="lang-toggle" type="button" aria-label="Переключить на русский">RU</button>
      <details class="qr-links">
        <summary>QR links</summary>
        <div class="qr-panel" role="group" aria-label="Demo links">
          <strong>Explore DMM</strong>
          <div class="qr-grid">
            <a href="https://github.com/CognitiveAISystems/DMM" target="_blank" rel="noopener noreferrer" aria-label="Open the method implementation">
              <img src="../qr/method.svg" alt="QR code for the DMM implementation" width="128" height="128" />
              <span>Code</span><small>github.com/CognitiveAISystems/DMM</small>
            </a>
            <a href="https://cognitiveaisystems.github.io/MAPF-DEMO/DMM/maze.html" target="_blank" rel="noopener noreferrer" aria-label="Open the live demo">
              <img src="../qr/maze-demo.svg" alt="QR code for the live demo" width="128" height="128" />
              <span>Live demo</span><small>MAPF-DEMO/DMM/maze.html</small>
            </a>
            <a href="https://arxiv.org/abs/2609.32019" target="_blank" rel="noopener noreferrer" aria-label="Open the paper">
              <img src="../qr/paper.svg" alt="QR code for the paper" width="128" height="128" />
              <span>Paper</span><small>arxiv.org/abs/2609.32019</small>
            </a>
          </div>
        </div>
      </details>
    </div>
  </header>

  <main class="maze-main">
    <section class="maze-stage glass" aria-label="Mini maze and communicating agents">
      <div class="maze-stage-heading"><div><p class="maze-kicker">Live policy trace</p><h1>The decision before the move</h1><p>Arrows show the agents’ intents. Lines show who can exchange messages. Agents move after the fourth round.</p></div><div class="maze-stage-counter"><small>Action</small><strong id="maze-action">001</strong><small>Round</small><strong id="maze-round">0 / 4</strong></div></div>
      <div id="maze-solved" class="maze-solved" hidden>✓ Solved — every agent reached its goal</div>
      <div class="maze-viewport"><div id="maze-board" class="maze-board" aria-label="15 by 11 cell maze"><svg id="maze-links" class="maze-links" viewBox="0 0 15 11" preserveAspectRatio="none" aria-hidden="true"></svg></div></div>
      <div class="maze-stage-footer"><span><i class="maze-legend-wall"></i>Wall</span><span><i class="maze-legend-goal"></i>Agent goal</span><span><i class="maze-legend-link"></i>Communication</span><span id="maze-changed">0 changed intents this round</span></div>
    </section>

    <aside class="maze-analysis glass">
      <div class="maze-analysis-head"><p class="maze-kicker">Intent inspector</p><h2 id="maze-agent-title">Agent 01</h2><p id="maze-agent-summary">Select an agent to inspect its decision.</p></div>
      <section class="maze-votes-section">
        <div class="maze-section-title"><h3>Votes by round</h3></div>
        <div id="maze-votes" class="maze-votes" role="group" aria-label="Votes and final intent scores for the selected agent"></div>
        <div id="maze-decision" class="maze-decision" hidden><small>Chosen action</small><strong id="maze-chosen-action"></strong></div>
      </section>
      <section class="maze-neighbors-section"><div class="maze-section-title"><h3>Message sources</h3><small id="maze-neighbor-count">0 agents</small></div><div id="maze-neighbors" class="maze-neighbors"></div></section>
      <section class="maze-all-section"><div class="maze-section-title"><h3>Agents</h3><small>Tap to inspect</small></div><div id="maze-all-agents" class="maze-all-agents"></div></section>
      <p id="maze-model-note" class="maze-model-note">Votes update the intent scores. After the fourth round, the planner uses the scores to choose collision-free moves.</p>
    </aside>

    <aside id="maze-editor" class="maze-editor glass" hidden>
      <p class="maze-kicker">Scenario editor</p>
      <h2>Build your maze</h2>
      <p class="maze-editor-intro">Choose a tool, then click cells on the board. Drag to paint walls or erase them. Select an agent to move its start or goal.</p>
      <div class="maze-editor-tools" role="group" aria-label="Maze editing tools">
        <button type="button" data-tool="wall">Wall</button><button type="button" data-tool="erase">Erase</button>
        <button type="button" data-tool="agent">Add agent</button><button type="button" data-tool="start">Move start</button><button type="button" data-tool="goal">Set goal</button>
      </div>
      <div class="maze-editor-agent-head"><h3>Agents</h3><span id="maze-editor-count">8 / 16</span></div>
      <div id="maze-editor-agents" class="maze-editor-agents"></div>
      <button id="maze-editor-remove" type="button" class="maze-editor-remove">Remove selected agent</button>
      <label class="maze-editor-lifelong"><input id="maze-lifelong" type="checkbox" checked><span><strong>Lifelong</strong><small>Generate a new goal when an agent arrives</small></span></label>
      <p id="maze-editor-message" class="maze-editor-message" role="status"></p>
      <div class="maze-editor-actions"><button id="maze-editor-default" type="button">Default</button><button id="maze-editor-cancel" type="button">Cancel</button><button id="maze-editor-apply" type="button">Run scenario</button></div>
    </aside>
  </main>

  <div class="maze-player glass" aria-label="Communication round player">
    <button id="maze-prev" class="maze-step-button" type="button" aria-label="Previous communication round">←</button>
    <button id="maze-play" class="maze-play-button" type="button">Ⅱ <span>Pause</span></button>
    <button id="maze-next" class="maze-step-button" type="button" aria-label="Next communication round">→</button>
    <div class="maze-timeline"><div><strong id="maze-timeline-label">Before communication</strong><small id="maze-step-label">Step 0</small></div><input id="maze-scrub" type="range" min="0" max="4" value="0" aria-label="Recorded communication round"></div>
    <label class="maze-speed"><span>Speed <output id="maze-speed-value">1.0×</output></span><input id="maze-speed" type="range" min="0.5" max="2" step="0.25" value="1" /></label>
    <button id="maze-reset" class="maze-reset-button" type="button">Restart</button>
    <select id="maze-preset" class="maze-reset-button" aria-label="Maze scenario">
      <option value="default">Continuous maze</option><option value="passing">Head-on passage</option><option value="crossing">Crossroads</option><option value="rooms">Two rooms</option><option value="custom" hidden>Custom scenario</option>
    </select>
    <button id="maze-edit" class="maze-reset-button" type="button">Edit maze</button>
  </div>
</div>
`,a=`modulepreload`,o=function(e){return`/MAPF-DEMO/`+e},s={},c=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),c=i?.nonce||i?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=l(t.map(t=>{if(t=o(t,n),t=u(t),t in s)return;s[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:a,r||(i.as=`script`),i.crossOrigin=``,i.href=t,c&&i.setAttribute(`nonce`,c),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},l=document.querySelector(`#demo-views`);l.innerHTML=r+i;var u={warehouse:l.querySelector(`[data-demo-panel="warehouse"]`),maze:l.querySelector(`[data-demo-panel="maze"]`)},d=l.querySelectorAll(`a[data-demo-link]`),f={warehouse:`Interactive warehouse`,maze:`DMM communication`},p=document.body.dataset.demoView===`maze`?`maze`:`warehouse`;n();function m(){document.title=`${e(f[p])} · DMM-Demo`}function h(e,t=!1){p=e,document.body.dataset.demoView=e,u.warehouse.hidden=e!==`warehouse`,u.maze.hidden=e!==`maze`;for(let t of d)t.dataset.demoLink===e?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`);m(),window.dispatchEvent(new Event(`demo:viewchange`)),t&&u[e].querySelector(`a[aria-current="page"]`)?.focus({preventScroll:!0})}l.addEventListener(`click`,e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target instanceof Element?e.target.closest(`a[data-demo-link]`):null;if(!t)return;e.preventDefault();let n=t.dataset.demoLink;n!==p&&(history.pushState(null,``,t.href),h(n,!0))}),window.addEventListener(`popstate`,()=>{let e=new URL(location.href);t()===`ru`?e.searchParams.set(`lang`,`ru`):e.searchParams.delete(`lang`),e.href!==location.href&&history.replaceState(history.state,``,e),h(e.pathname.endsWith(`/maze.html`)?`maze`:`warehouse`)}),window.addEventListener(`demo:languagechange`,m),h(p),c(()=>import(`./main-B_ZM8ane.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),c(()=>import(`./maze-Bu3irmjZ.js`),__vite__mapDeps([18,8,9,17]));export{c as t};