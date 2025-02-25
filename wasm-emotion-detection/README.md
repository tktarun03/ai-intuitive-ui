# WebAssembly AI Emotion & Intent Recognition

This WebAssembly module powers AI-driven emotion and intent detection for intuitive UI interactions.

## Build Instructions

1. Install Rust and WebAssembly target:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```

2. Build the WebAssembly module:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```

3. Integrate with frontend applications.