# Multiplayer Pong Game

[![Current tech stack](https://skillicons.dev/icons?i=nodejs,express,html,css,js,bun)](https://skillicons.dev)

A real-time multiplayer Pong game built using the HTML Canvas, JavaScript, Node.js with Express, and Socket.io for seamless communication.

## Description

This project implements a classic Pong game with a multiplayer twist. Players connect to a server, are automatically matched into rooms, and can compete against each other in real-time. The game features synchronized paddle and ball movements, score tracking, and a responsive design.

## Technologies Used

*   **Frontend**:
    *   HTML5 Canvas
    *   CSS3
    *   JavaScript (ESNext)
    *   Socket.IO Client
*   **Backend**:
    *   Node.js
    *   Express.js
    *   Socket.IO
*   **Runtime/Package Manager**:
    *   Bun

## Features

*   Real-time multiplayer gameplay.
*   Synchronized paddle and ball movement across connected clients.
*   Automatic room creation for two players.
*   Score tracking for each player.
*   Responsive design for various screen sizes.

## Installation

To set up the project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/Jhonneg/PongJS.git
    cd PongJS
    ```
2.  Install dependencies using Bun (recommended) or npm:

    ```bash
    # Using Bun
    bun install

    # Or using npm
    npm install
    ```

## Running the Game

After installing the dependencies, you can start the server:

```bash
# Using Bun
bun start

# Or using npm
npm run start
```

The server will start on http://localhost:3000 (or the port specified by the PORT environment variable).

# Gameplay
1. Open http://localhost:3000 in your web browser.
2. To play against an opponent, open the same URL in another browser tab or on a different device. The game automatically pairs the first two players who connect into a room.
3. Control your paddle by moving your mouse horizontally. On mobile devices, touch input will control the paddle.
The goal is to hit the ball past your opponent's paddle to score points.
Demo
4. A short demo of the game in action:

# Demo
https://github.com/Jhonneg/PongJS/assets/94491571/733b62cc-e616-4380-9c98-c13c5e75b717

