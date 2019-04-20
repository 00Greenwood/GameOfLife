#include "Window.h"

int main(int argc, char const *argv[])
{
	auto window = std::make_unique<Window>();
	window->CreateWindow();
    return 0;
}