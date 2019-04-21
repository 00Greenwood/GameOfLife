#include "Window.h"

using namespace glm;

Window::Window()
	: m_window(nullptr)
	{};

Window::~Window() = default;

void Window::CreateWindow()
    {
    // Initialise GLFW.
    glewExperimental = true; // Needed for core profile.
    if(!glfwInit())
    {
        fprintf(stderr, "Failed to initialize GLFW.\n");
		getchar();
		return;
    }

    glfwWindowHint(GLFW_SAMPLES, 4); // 4x antialiasing
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3); // We want OpenGL 3.3.
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); // To make MacOS happy; should not be needed.
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); // We don't want the old OpenGL.

    // Open a window and create its OpenGL context.
    m_window = glfwCreateWindow( 1024, 768, "Game Of Life", nullptr, nullptr);
    if(!m_window){
		fprintf(stderr, "Failed to create GLFW window.\n");
        glfwTerminate();
		return;
    }

	glfwMakeContextCurrent(m_window);

	// Initialize GLEW.
	if (glewInit() != GLEW_OK) {
		fprintf(stderr, "Failed to initialize GLEW.\n");
		getchar();
		glfwTerminate();
		return;
	}

	// Ensure we can capture the keys being pressed.
	glfwSetInputMode(m_window, GLFW_STICKY_KEYS, GL_TRUE);

	// White background.
	glClearColor(1.0f, 1.0f, 1.0f, 0.0f);
}

void Window::Repaint() 
{
	// Clear the screen. It's not mentioned before Tutorial 02, but it can cause flickering, so it's there nonetheless.
	glClear(GL_COLOR_BUFFER_BIT);

	// Draw nothing, see you in tutorial 2 !


	// Swap buffers
	glfwSwapBuffers(m_window);
	glfwPollEvents();
}

bool Window::ShouldCloseWindow()
{
	bool shouldClose = false;
	// Check if the ESC key was pressed or the window was closed.
	shouldClose = glfwGetKey(m_window, GLFW_KEY_ESCAPE) != GLFW_PRESS && glfwWindowShouldClose(m_window) == 0;
	return shouldClose;
}

void Window::CloseWindow()
{
	// Close OpenGL window and terminate GLFW
	glfwTerminate();
}

void Window::DrawGrid() 
{
	if (!m_window) {
		return;
	}
}