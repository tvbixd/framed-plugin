# **Frame Selector Plugin for Figma**

The **Frame Selector Plugin** is a simple and intuitive tool that enhances your Figma workflow by allowing you to select up to 5 frames at a time. Once selected, the plugin transitions from an empty state to a dynamic UI displaying the selected frame names.

---

## **Features**
1. **Dynamic State Handling**: 
  - Starts with an empty state when no frames are selected.
  - Switches to a detailed UI upon selecting up to 5 frames.
2. **Frame Limitation**: Limits selection to a maximum of 5 frames to maintain focus and avoid overwhelming the interface.
3. **Real-Time Notifications**: Provides feedback when no frames are selected or when the selection exceeds the limit.
4. **User-Friendly UI**: Displays the names of selected frames in a clean and readable format.

---

## **Installation**

1. Clone or download this repository.
2. Open Figma and navigate to **Plugins** > **Development** > **Import Plugin from Manifest**.
3. Select the `manifest.json` file from the cloned repository.
4. The plugin will now be available in your **Development** plugins list.

---

## **Usage**

1. Open a Figma project.
2. Run the plugin from **Plugins** > **Development** > **Frame Selector Plugin**.
3. Follow the instructions:
   - Select up to 5 frames to switch to the UI view.
   - The plugin will notify you if you exceed the frame limit or have no frames selected.
4. View selected frame names in the plugin UI.

---

## **Development**

### **File Structure**
- **`manifest.json`**: The plugin's configuration file.
- **`code.js`**: Handles the main logic of the plugin, including frame selection and state transitions.
- **`ui.html`**: Defines the user interface for the plugin after selecting frames.
- **`styles.css`**: Contains additional styles for the plugin UI (if applicable).

### **Running the Plugin Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frame-selector-plugin.git
   cd frame-selector-plugin
   ```
2. Import the plugin into Figma using the `manifest.json` file.
3. Edit `code.js` or `ui.html` to add custom logic or update the interface.

---

## **Contributing**

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

---

## **License**

This plugin is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Credits**

Created by **Courage Egbude**. Designed to improve Figma workflows and enhance the user experience for creative professionals.
