# Tic Tac Toe Game
Welcome to the classic Tic Tac Toe game built using HTML, CSS, and JavaScript! This game offers both traditional 3x3 gameplay and the flexibility to choose different board sizes. Enjoy playing against another player or the computer in solo mode!

Features
Game Title and Icon
Attractive Title: "Tic Tac Toe - Classic Fun"
Graphic/Icon: A suitable Tic Tac Toe icon displayed next to the title for visual appeal.
Game Board
Turn Indicator: Shows which player's turn it is.
Dynamic Grid: 3x3 grid with 9 empty squares initially, with options for 4x4 and 5x5 grids.
Player Symbols: Click on a square to display the current player’s symbol (X or O).
Win/Tie Detection: Checks for win or tie conditions after each move and displays the result.
Automatic Reset: Resets the board 5 seconds after the game ends.
Manual Reset: A reset button to start a new game anytime, with a modal warning to confirm the action.
Variable Board Sizes
Custom Grids: Options to choose between 3x3, 4x4, and 5x5 grids.
Winning Condition: For N×N board, "N same symbols in a straight line" wins the game.
Scorecard
Leaderboard: Tracks and displays winning status between player 1 and player 2.
Score Reset: Option to reset scores anytime.
Persistent Data: Uses localStorage to retain scores even after refreshing the page.
Custom Player Names: Allows users to change their names from “Player 1/2” to their preferred names.
Solo Mode
Play Against Computer: Enjoy playing against a computer with random move logic.
Responsive Design
Responsive Layout: Works well on both desktop and mobile devices for an optimal user experience.
Design and Implementation
Layout and Design
Customizable Design: You have the freedom to design the layout and elements to enhance user experience and aesthetics.
Minimalist Approach: Simple yet elegant design with smooth animations, leveraging CSS libraries like Bootstrap if desired.
Code Structure and Readability
Reusable Code: Ensures code is easy to read, follow, and reuse.
DRY Principle: Avoids repetition by following the "Don't Repeat Yourself" principle.
Getting Started
Prerequisites
Web browser (Chrome, Firefox, Edge, etc.)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/tic-tac-toe.git
Navigate to the project directory:
bash
Copy code
cd tic-tac-toe
Open index.html in your web browser.
How to Play
Choose the board size (3x3, 4x4, or 5x5) from the options.
Enter player names or proceed with default names.
Click on an empty square to make your move.
The game will automatically detect win/tie conditions and reset the board after displaying the result.
Use the reset button to start a new game anytime, with a confirmation modal.
Track your scores on the leaderboard and reset scores if needed.
For solo play, select the "Play Against Computer" option.
Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-branch
Make your changes and commit them:
bash
Copy code
git commit -m "Add new feature"
Push to the branch:
bash
Copy code
git push origin feature-branch
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Enjoy the game and happy coding! If you have any questions or suggestions, feel free to open an issue on GitHub.






