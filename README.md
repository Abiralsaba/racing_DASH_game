#PLAY racing_DASH_game : https://abiralsaba.github.io/racing_DASH_game/


🎬 DOCUMENTARY: THE MAKING OF “ESCAPE ROAD” – UNITY 2D EDITION
Created, Designed & Engineered by @abiralsaba
🟢 CHAPTER 1: THE ARCHITECTURE

"Escape Road" is a 2D Unity endless-runner developed with high-performance physics, custom C# logic, and a lightweight sprite-rendering pipeline.

1. Unity Engine Core

Unity Version: 2021–2023 LTS (2D Template)

Renderer: Default 2D / URP

Physics Engine: Rigidbody2D + BoxCollider2D

UI: Unity Canvas + TextMeshPro

Build Platforms: Windows, WebGL, Android, macOS

2. Scene Structure

MainMenu – Game title, Start button, High Score
GameScene – Full gameplay
GameOver – Final score, Retry, Save high score

3. Modular C# Script System
Script	Function
PlayerController.cs	Movement, jump, animation
ObstacleSpawner.cs	Infinite obstacle spawning
Obstacle.cs	Movement + speed increase
PowerUpManager.cs	Random power-up spawning
GameManager.cs	Score system, UI, game flow
DataManager.cs	Save + load high score

Unity handles animation clips, sprite slicing, physics simulation, and scene transitions while all logic is engineered by @abiralsaba.

🟡 CHAPTER 2: GAME MECHANICS

Escape Road is designed to be fast, addictive, and unforgiving — with difficulty that grows infinitely.

1. Player Physics & Movement

Gravity Scale: 3–5

Jump Force: 12–15

Ground Check: Raycast on Layer “Ground”

Jump Logic Concept:

if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
    rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);

2. Obstacle Mechanics

Spawn Interval: Starts at 1.2s → decreases over time

Speed: Starts at 6 → increases gradually

All obstacles generated from prefabs

Movement is world-based; the player doesn’t move horizontally

3. Power-Up System

Spawns every 5 seconds using a Coroutine.

Power-Up	Color	Effect
Score Multiplier	🟡 #FFD700	2× score for 5 seconds
Shield	🔵 #00BFFF	Survive one collision
High Jump	🟢 #32CD32	Boosts jump force
Slow Time	🟣 #8A2BE2	Halves obstacle speed

Each is a prefab with its own icon, glow effect, and timer logic.

🔴 CHAPTER 3: VISUAL IDENTITY & RECREATED CONCEPT SHOTS
EXHIBIT A — LOADING / START SCREEN
+--------------------------------------------------+
|                 ESCAPE ROAD                      |
|                    by @abiralsaba                |
|                                                  |
|                [   LOADING 75%   ]               |
|     ---------------------------------------      |
|     |###################################   |     |
|     ---------------------------------------      |
+--------------------------------------------------+


Gold-accented UI (#FAD234) on a dark-themed background, rendered with Unity Canvas.

EXHIBIT B — IN-GAME SNAPSHOT
+--------------------------------------------------+
| Score: 1450               High Score: 5000       |
|           [ MULTIPLIER x2 ACTIVE ]               |
|                                                  |
|  (Sky: #87CEEB)                                  |
|                                                  |
|      [ BLUE PLAYER ]     [POWER-UP VIOLET]       |
|         [##]                                          |
|         [##]~~~(Shield Glow)   [ RED OBSTACLE ]      |
|______________________________________________________|
| (Ground: #6B5E54)                                    |
+------------------------------------------------------+


Sprites, parallax layers, obstacle prefabs, and power-up effects are rendered in Unity’s 2D pipeline.

🔵 CHAPTER 4: PERFORMANCE, BUILD & SECURITY
1. Build Optimization

Sprite Atlas for draw-call reduction

Object pooling for obstacles

Lightweight 2D particles

Adaptive quality for mobile

2. Save System

Escape Road uses Unity PlayerPrefs to store:

High Score

Last Score

Audio/FX settings

3. Distribution

Supported platforms:

Windows EXE

WebGL

Android APK

macOS .app

🏁 CREDITS
Role	Contributor
Creator	@abiralsaba
Lead Developer	@abiralsaba
Gameplay Designer	@abiralsaba
C# Programmer	@abiralsaba
Art Direction	@abiralsaba
Documentation	Generated based on the instructions of @abiralsaba
