# 🚗 Escape Road - Unity 2D Edition

[![Unity](https://img.shields.io/badge/Unity-2021%2B-black?style=flat&logo=unity)](https://unity.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build](https://img.shields.io/badge/Build-WebGL%20%7C%20Android%20%7C%20PC-blue)](https://abiralsaba.github.io/racing_DASH_game/)
[![Developer](https://img.shields.io/badge/Dev-@abiralsaba-red)](https://github.com/abiralsaba)

> **"Escape Road"** is a high-performance 2D endless runner engineered with custom C#,JS  logic and a lightweight sprite-rendering pipeline. Designed to be fast, addictive, and unforgiving.

### 🎮 [PLAY NOW (Live Demo)](https://abiralsaba.github.io/racing_DASH_game/)

---

## 📖 About The Project

**Escape Road** is a technical showcase of 2D game development in Unity. It utilizes the Universal Render Pipeline (URP) or Default 2D renderer to deliver smooth performance across WebGL, Android, and Desktop platforms. The game features a progressively increasing difficulty curve, physics-based movement, and a modular power-up system.

### Key Features
* **Infinite Scaling Difficulty:** Obstacle spawn rates decrease and speed increases over time.
* **Physics-Based Controls:** Finely tuned gravity (Scale 3-5) and impulse-based jumping.
* **Object Pooling:** Optimized performance for mobile and web.
* **Persistent Data:** High scores saved via `PlayerPrefs`.

---

## 🛠️ Technical Architecture

This project follows a modular C# script system where logic is decoupled for easier maintenance.

### Core Components
| Script | Responsibility |
| :--- | :--- |
| `PlayerController.cs` | Handles physics, Raycast ground checks, jumping, and animation states. |
| `ObstacleSpawner.cs` | Manages infinite object pooling and generation logic. |
| `Obstacle.cs` | Controls world-based movement and dynamic speed increments. |
| `PowerUpManager.cs` | Coroutine-based spawner for random power-ups. |
| `GameManager.cs` | The central brain handling scoring, UI updates, and game state flow. |
| `DataManager.cs` | Handles serialization of High Scores and settings. |

### Physics Logic Snippet
The jump mechanic uses `Rigidbody2D` with immediate impulse force, gated by a Raycast ground check to prevent double jumping (unless modified by power-ups).



if (Input.GetKeyDown(KeyCode.Space) && isGrounded) {
    rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
}
🎨 Visual Identity
The game utilizes a "Dark & Gold" aesthetic for high contrast and readability.
• UI Style: Gold-accented text (#FAD234) on dark backgrounds using TextMeshPro.
• Environment: Parallax sky (#87CEEB) and ground layers (#6B5E54).
• Performance: Sprite Atlases are used to reduce draw calls, ensuring 60+ FPS on low-end devices.
Installation & Development
git clone [https://github.com/abiralsaba/racing_DASH_game.git](https://github.com/abiralsaba/racing_DASH_game.git)

Open in Unity: Add the folder to Unity Hub and open.
🏁 Credits
This entire project was created, designed, and engineered by @abiralsaba.
• Lead Developer: @abiralsaba
• Gameplay Designer: @abiralsaba
• C# Programmer: @abiralsaba
• Art Direction: @abiralsaba
📄 License
Distributed under the MIT License. See LICENSE for more information.
