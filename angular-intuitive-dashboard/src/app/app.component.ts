import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Intuitive UI Dashboard</h1>
    <div class="dashboard">
      <intuitive-widget></intuitive-widget>
      <wasm-emotion-detection></wasm-emotion-detection>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }