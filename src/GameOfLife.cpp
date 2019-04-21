#include "Window.h"

int main(int argc, char const *argv[])
{
	auto window = std::make_unique<Window>();
	window->CreateWindow();
	do {
		window->Repaint();
	} 
	while (window->ShouldCloseWindow());
	window->CloseWindow();
    return 0;
}