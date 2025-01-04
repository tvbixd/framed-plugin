// Show initial UI
figma.showUI(__html__, { 
  width: 340, 
  height: 500,
  themeColors: true
});

// Track selected frames
let selectedFrameIds = new Set();

// Event: Listen for selection changes
figma.on('selectionchange', () => {
  const selectedNodes = figma.currentPage.selection;
  const selectedFrames = selectedNodes.filter(node => node.type === 'FRAME');

  // Clear selection if no frames
  if (selectedFrames.length === 0) {
    selectedFrameIds.clear();
    figma.notify("No frames selected. Please select a frame.");
    figma.ui.postMessage({ 
      type: "showEmptyState"
    });
    console.log("No frames selected. Sent showEmptyState message.");
    return;
  }

  // Handle max selection limit
  if (selectedFrames.length > 5) {
    figma.notify("You can only select up to 5 frames.");
    return;
  }

  // Update selected frames and switch to UI view
  selectedFrameIds = new Set(selectedFrames.map(frame => frame.id));
  figma.ui.postMessage({ 
    type: "switchUI",
    frames: selectedFrames.map(frame => ({
      id: frame.id,
      name: frame.name
    }))
  });
  console.log("Frames selected. Sent switchUI message with frames:", selectedFrames.map(frame => frame.name));
});

// Listen for messages from UI
figma.ui.onmessage = msg => {
  if (msg.type === 'done') {
    figma.closePlugin();
  }
};