# Mars Rovers Simulation

## Philosophy behind the Solution

The Mars Rovers Simulation is designed to simulate the movement of rovers on a rectangular plateau on Mars. The philosophy behind this solution can be summarized as follows:

#### Simplicity and Modularity: The code is designed to be simple and modular. It provides a clear separation of concerns, making it easy to understand and maintain.

#### Flexibility: While the example code includes static input data, it is designed with flexibility in mind. The core logic can be easily integrated into a broader application that handles dynamic input and visualization.

#### Testing: The code includes Jest tests to ensure that the expected results match the actual component output. Testing helps prevent regressions and ensures the application behaves as expected.

## Assumptions Made during Implementation

Several assumptions were made during the implementation of the Mars Rovers Simulation:

### Static Input Data: The code assumes that the input data is provided statically within the script. In a real application, the input data would typically come from user input or an external source.

### No Data Validation: The code does not include extensive data validation. It assumes that the input data is well-formed and valid. In practice, input validation should be added to handle potential errors or incorrect data.

### No Rover Collision Handling: The implementation does not account for collisions between rovers. Handling rover collisions would require additional logic.

### No Visualization: The React version of the code does not include canvas drawing or any graphical visualization. It focuses solely on the logic and output display. Adding graphical representation is an extension that can be implemented separately.

### No User Interaction: The code does not include user interaction for input. In a real application, you would need to implement a user interface for input and interaction.

### No Rover Creation or Removal: The code does not handle rover creation or removal during the simulation. It assumes that all rovers are present at the beginning and executes their movements sequentially.

## Explanation of the Code

The code provides a solution for simulating the movement of rovers on a rectangular plateau on Mars. It includes a modular design with key components:

The move function handles rover movement by interpreting instructions ('L', 'R', 'M') and updating the rover's position.
The navigatePlateau function simulates the rover's navigation within the plateau. It checks for boundary violations and ensures that the rover stays within the specified bounds.
In the React version of the code, the RoverSimulation component displays the final positions and directions of the rovers based on provided input data. It separates the input data from the core logic, allowing for flexibility and testing.
Necessary Steps to Run the Code

To run the Mars Rovers Simulation code in a React application, follow these steps:

## Create a React Application: If you don't have a React app, create one using create-react-app.

## Replace Files: Replace the contents of the src/App.js file with the code from the RoverSimulation component. Create a new RoverSimulation.js file in the src directory and paste the RoverSimulation component code there.

## Install Dependencies: Install the required testing libraries using npm install.

## \*\*Update src/App.js: Update the src/App.js file to include the import statement for the RoverSimulation component.

## Start the React Development Server: Start the development server using npm start. The React application will open in a web browser at http://localhost:3000/.

## Run Tests (Optional): If you want to run the provided Jest tests, use the npm test command.
