# https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/python

# The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

# Define these methods:

# `get_width()` return the width of the `Block`

# `get_length()` return the length of the `Block`

# `get_height()` return the height of the `Block`

# `get_volume()` return the volume of the `Block`

# `get_surface_area()` return the surface area of the `Block`

class Block:
    def __init__(self, measurement):
        self.width = measurement[0]
        self.length = measurement[1]
        self.height = measurement[2]

    def get_width(self):
        return self.width
    
    def get_length(self):
        return self.length
    
    def get_height(self):
        return self.height
    
    def get_volume(self):
        return self.width * self.length * self.height
    
    def get_surface_area(self):
        return (self.width * self.length + self.length * self.height + self.height * self.width) * 2