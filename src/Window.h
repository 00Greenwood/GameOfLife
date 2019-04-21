#pragma once

// Include standard headers
#include <stdio.h>
#include <stdlib.h>
#include <memory>

// Include GLEW. Always include it before gl.h and glfw3.h, since it's a bit magic.
#include <GL/glew.h>

// Include GLFW
#include <GLFW/glfw3.h>

// Include GLM
#include <glm/glm.hpp>

class Window
{
public:
	Window();
	~Window();

	void CreateWindow();
	void Repaint();
	bool ShouldCloseWindow();
	void CloseWindow();
	void DrawGrid();


private:
	GLFWwindow* m_window;
};
