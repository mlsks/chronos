// Timeline visualization class
class TimelineVisualization {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.events = [];
    this.connections = [];
    this.selectedEvent = null;
    this.highlightedConnections = [];
    this.zoom = 1;
    this.offset = { x: 0, y: 0 };
    this.isDragging = false;
    this.lastMousePos = { x: 0, y: 0 };
    this.animationInProgress = false;
    this.alternativePathActive = false;

    // Node appearance settings
    this.nodeSettings = {
      baseRadius: 15,
      selectedRadius: 22,
      hoverRadius: 18,
      colors: {
        ancient: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-primary")
          .trim(),
        medieval: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-secondary")
          .trim(),
        renaissance: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-tertiary")
          .trim(),
        industrial: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-quaternary")
          .trim(),
        modern: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-highlight")
          .trim(),
        contemporary: getComputedStyle(document.documentElement)
          .getPropertyValue("--node-primary")
          .trim(),
      },
      connectionColor: getComputedStyle(document.documentElement)
        .getPropertyValue("--connection-default")
        .trim(),
      highlightConnectionColor: getComputedStyle(document.documentElement)
        .getPropertyValue("--connection-highlight")
        .trim(),
    };

    this.initCanvas();
    this.setupEventListeners();
  }

  initCanvas() {
    // Set canvas dimensions to match container
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  resizeCanvas() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;
    this.render();
  }

  setupEventListeners() {
    // Mouse events for interaction
    this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
    this.canvas.addEventListener("wheel", this.handleWheel.bind(this));

    // Touch events for mobile
    this.canvas.addEventListener(
      "touchstart",
      this.handleTouchStart.bind(this)
    );
    this.canvas.addEventListener("touchmove", this.handleTouchMove.bind(this));
    this.canvas.addEventListener("touchend", this.handleTouchEnd.bind(this));
  }

  loadEvents(events) {
    this.events = events;
    this.calculateConnections();
    this.render();
  }

  calculateConnections() {
    this.connections = [];

    // Create connection lines between events
    this.events.forEach((event) => {
      if (event.connections && event.connections.length) {
        event.connections.forEach((connectedId) => {
          // Avoid duplicate connections
          const connectionExists = this.connections.some(
            (conn) =>
              (conn.source === event.id && conn.target === connectedId) ||
              (conn.source === connectedId && conn.target === event.id)
          );

          if (!connectionExists) {
            this.connections.push({
              source: event.id,
              target: connectedId,
              highlighted: false,
            });
          }
        });
      }
    });
  }

  render() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background grid
    this.drawGrid();

    // Draw connections first (so they appear behind nodes)
    this.drawConnections();

    // Draw event nodes
    this.drawEvents();

    // Draw labels for events
    this.drawLabels();
  }

  drawGrid() {
    const gridSize = 50 * this.zoom;
    const offsetX = this.offset.x % gridSize;
    const offsetY = this.offset.y % gridSize;

    this.ctx.strokeStyle = "rgba(200, 200, 200, 0.2)";
    this.ctx.lineWidth = 1;

    // Draw vertical lines
    for (let x = offsetX; x < this.canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = offsetY; y < this.canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }

  drawConnections() {
    this.connections.forEach((connection) => {
      const sourceEvent = this.events.find((e) => e.id === connection.source);
      const targetEvent = this.events.find((e) => e.id === connection.target);

      if (sourceEvent && targetEvent) {
        const sourcePos = this.getEventPosition(sourceEvent);
        const targetPos = this.getEventPosition(targetEvent);

        // Determine if this connection should be highlighted
        const isHighlighted = this.highlightedConnections.some(
          (conn) =>
            (conn.source === connection.source &&
              conn.target === connection.target) ||
            (conn.source === connection.target &&
              conn.target === connection.source)
        );

        // Draw the connection line
        this.ctx.beginPath();
        this.ctx.moveTo(sourcePos.x, sourcePos.y);

        if (this.alternativePathActive && isHighlighted) {
          // Draw curved path for alternative history
          const controlPoint = {
            x: (sourcePos.x + targetPos.x) / 2 + (Math.random() - 0.5) * 100,
            y: (sourcePos.y + targetPos.y) / 2 + (Math.random() - 0.5) * 100,
          };
          this.ctx.quadraticCurveTo(
            controlPoint.x,
            controlPoint.y,
            targetPos.x,
            targetPos.y
          );

          // Use dashed line for alternative paths
          this.ctx.setLineDash([5, 5]);
          this.ctx.strokeStyle = "rgba(155, 89, 182, 0.7)"; // Purple for alternative paths
        } else {
          // Draw straight line for normal connections
          this.ctx.lineTo(targetPos.x, targetPos.y);
          this.ctx.setLineDash([]);
          this.ctx.strokeStyle = isHighlighted
            ? this.nodeSettings.highlightConnectionColor
            : this.nodeSettings.connectionColor;
        }

        this.ctx.lineWidth = isHighlighted ? 3 : 2;
        this.ctx.stroke();
        this.ctx.setLineDash([]); // Reset dash pattern
      }
    });
  }

  drawEvents() {
    this.events.forEach((event) => {
      const pos = this.getEventPosition(event);
      const isSelected =
        this.selectedEvent && this.selectedEvent.id === event.id;
      const isConnected =
        this.selectedEvent && this.selectedEvent.connections.includes(event.id);

      // Determine radius based on state and importance
      let radius = this.nodeSettings.baseRadius;
      if (isSelected) {
        radius = this.nodeSettings.selectedRadius;
      } else if (isConnected) {
        radius = this.nodeSettings.hoverRadius;
      }

      // Scale radius by importance
      radius *= 0.8 + event.importance * 0.4;

      // Draw node
      this.ctx.beginPath();
      this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);

      // Fill with era-specific color
      this.ctx.fillStyle = this.nodeSettings.colors[event.era] || "#999";

      // Add glow effect for selected or connected nodes
      if (isSelected || isConnected) {
        this.ctx.shadowColor = isSelected
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.5)";
        this.ctx.shadowBlur = 15;
      } else {
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset shadow

      // Add border
      this.ctx.strokeStyle = isSelected ? "#fff" : "rgba(255, 255, 255, 0.5)";
      this.ctx.lineWidth = isSelected ? 3 : 1;
      this.ctx.stroke();

      // Add year indicator inside node for important events
      if (event.importance > 0.8 && radius > 18) {
        const year = event.date.split(" ")[0]; // Extract year from date
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        this.ctx.font = "10px Arial";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(year, pos.x, pos.y);
      }
    });
  }

  drawLabels() {
    this.events.forEach((event) => {
      const pos = this.getEventPosition(event);
      const isSelected =
        this.selectedEvent && this.selectedEvent.id === event.id;
      const isConnected =
        this.selectedEvent && this.selectedEvent.connections.includes(event.id);

      // Only draw labels for selected, connected, or important events when zoomed out
      if (
        isSelected ||
        isConnected ||
        (event.importance > 0.7 && this.zoom > 0.7)
      ) {
        const radius = isSelected
          ? this.nodeSettings.selectedRadius
          : isConnected
          ? this.nodeSettings.hoverRadius
          : this.nodeSettings.baseRadius;

        this.ctx.font = isSelected ? "bold 14px Arial" : "12px Arial";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "top";
        this.ctx.fillStyle = isSelected ? "#fff" : "rgba(255, 255, 255, 0.9)";

        // Get the title in the current language
        const title =
          typeof event.title === "object"
            ? getText(event.title.en, event.title.fr)
            : event.title;

        // Add background for better readability
        const textWidth = this.ctx.measureText(title).width;
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        this.ctx.fillRect(
          pos.x - textWidth / 2 - 5,
          pos.y + radius + 5,
          textWidth + 10,
          20
        );

        // Draw text
        this.ctx.fillStyle = "#fff";
        this.ctx.fillText(title, pos.x, pos.y + radius + 10);
      }
    });
  }

  getEventPosition(event) {
    // Convert normalized coordinates to canvas position
    return {
      x: event.coordinates.x * this.canvas.width * this.zoom + this.offset.x,
      y: event.coordinates.y * this.canvas.height * this.zoom + this.offset.y,
    };
  }

  getEventAtPosition(x, y) {
    // Find if any event node is under the cursor
    for (let i = this.events.length - 1; i >= 0; i--) {
      const event = this.events[i];
      const pos = this.getEventPosition(event);
      const radius =
        this.nodeSettings.baseRadius * (0.8 + event.importance * 0.4);

      const distance = Math.sqrt(
        Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2)
      );

      if (distance <= radius) {
        return event;
      }
    }
    return null;
  }

  selectEvent(event) {
    this.selectedEvent = event;

    if (event) {
      // Highlight connections to this event
      this.highlightedConnections = this.connections.filter(
        (conn) => conn.source === event.id || conn.target === event.id
      );

      // Trigger event selection callback
      if (this.onEventSelected) {
        this.onEventSelected(event);
      }
    } else {
      this.highlightedConnections = [];

      // Trigger deselection callback
      if (this.onEventDeselected) {
        this.onEventDeselected();
      }
    }

    this.render();
  }

  handleMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedEvent = this.getEventAtPosition(x, y);

    if (clickedEvent) {
      this.selectEvent(clickedEvent);
    } else {
      // Start dragging the canvas
      this.isDragging = true;
      this.lastMousePos = { x, y };
    }
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (this.isDragging) {
      // Pan the canvas
      this.offset.x += x - this.lastMousePos.x;
      this.offset.y += y - this.lastMousePos.y;
      this.lastMousePos = { x, y };
      this.render();
    } else {
      // Check for hover effects
      const hoveredEvent = this.getEventAtPosition(x, y);
      this.canvas.style.cursor = hoveredEvent ? "pointer" : "grab";
    }
  }

  handleMouseUp() {
    this.isDragging = false;
  }

  handleWheel(e) {
    e.preventDefault();

    // Calculate zoom factor
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = this.zoom * zoomFactor;

    // Limit zoom range
    if (newZoom >= 0.5 && newZoom <= 3) {
      // Get mouse position relative to canvas
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate new offset to zoom toward mouse position
      this.offset.x = mouseX - (mouseX - this.offset.x) * zoomFactor;
      this.offset.y = mouseY - (mouseY - this.offset.y) * zoomFactor;

      this.zoom = newZoom;
      this.render();
    }
  }

  handleTouchStart(e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const touchedEvent = this.getEventAtPosition(x, y);

      if (touchedEvent) {
        this.selectEvent(touchedEvent);
      } else {
        // Start dragging
        this.isDragging = true;
        this.lastMousePos = { x, y };
      }
    }
  }

  handleTouchMove(e) {
    if (this.isDragging && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      // Pan the canvas
      this.offset.x += x - this.lastMousePos.x;
      this.offset.y += y - this.lastMousePos.y;
      this.lastMousePos = { x, y };
      this.render();
    }
  }

  handleTouchEnd() {
    this.isDragging = false;
  }

  resetView() {
    this.zoom = 1;
    this.offset = { x: 0, y: 0 };
    this.selectEvent(null);
    this.render();
  }

  simulateAlternativePath() {
    if (this.animationInProgress || !this.selectedEvent) return;

    this.animationInProgress = true;
    this.alternativePathActive = true;

    // Get a random alternative scenario
    const scenarios = this.selectedEvent.alternativeScenarios;
    if (!scenarios || scenarios.length === 0) {
      this.animationInProgress = false;
      return;
    }

    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    // Notify about the scenario
    if (this.onAlternativeScenario) {
      this.onAlternativeScenario(scenario);
    }

    // Animate the alternative path
    let frame = 0;
    const totalFrames = 60;

    const animate = () => {
      frame++;
      this.render();

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        // End animation
        setTimeout(() => {
          this.alternativePathActive = false;
          this.animationInProgress = false;
          this.render();
        }, 3000);
      }
    };

    animate();
  }
}
