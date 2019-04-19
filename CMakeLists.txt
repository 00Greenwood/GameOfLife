cmake_minimum_required (VERSION 3.0)

project (GameOfLife)

set (GameOfLife_VERSION_MAJOR 0)
set (GameOfLife_VERSION_MINOR 1)

configure_file (
	Config.h.in
	Config.h
    )

add_executable (GameOfLife src/GameOfLife.cpp)

set_property(TARGET GameOfLife PROPERTY CXX_STANDARD 11)
target_compile_options(GameOfLife PRIVATE -Wall)

include_directories (src)

# glfw
add_subdirectory(lib/glfw EXCLUDE_FROM_ALL)
target_link_libraries(GameOfLife PRIVATE glfw)

# glew
add_definitions(-DGLEW_STATIC)
add_subdirectory(lib/glew EXCLUDE_FROM_ALL)
target_link_libraries(GameOfLife PRIVATE libglew_static)

# glm
add_subdirectory(lib/glm EXCLUDE_FROM_ALL)
target_link_libraries(GameOfLife PRIVATE glm)

# graphics
include_directories (src/Graphics)
add_subdirectory (src/Graphics)
target_link_libraries (GameOfLife PRIVATE Graphics)