# https://www.codewars.com/kata/6089c7992df556001253ba7d

# Your job is to create a class called Song.

# A new Song will take two parameters, title and artist.

# mount_moose = Song('Mount Moose', 'The Snazzy Moose')

# mount_moose.title => 'Mount Moose'
# mount_moose.artist => 'The Snazzy Moose'
# You will also have to create an instance method named howMany() (or how_many()).

# The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
    def how_many(self, listeners):
        for i in listeners:
            i = i.lower()
        number = []
        for j in listeners:
            if j in number:
                number.append(j)
        return len(number)
    
song = Song("Mount Moose", "The Snazzy Moose")
print(song.title)
print(song.how_many(['John', 'Fred', 'Bob', 'Carl', 'John']))

# Failed