import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'intuitive-widget',
  styleUrl: 'intuitive-widget.css',
  shadow: true
})
export class IntuitiveWidget {
  @State() response: string = "How can I assist you today? 🤖";

  analyzeIntent() {
    const intents = [
      "User seems happy! 😃 Displaying recommended content.",
      "User looks confused 🤔. Offering a guided tour.",
      "User is focused 🔥. Enabling productivity mode.",
      "User might be frustrated 😡. Activating support assistant."
    ];
    this.response = intents[Math.floor(Math.random() * intents.length)];
  }

  render() {
    return (
      <div class="intuitive-box">
        <h2>AI Intuitive UI</h2>
        <button onClick={() => this.analyzeIntent()}>Analyze User Intent</button>
        <p>{this.response}</p>
      </div>
    );
  }
}
