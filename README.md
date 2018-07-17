# OpenBibles CLI

## Installation

```
npm install -g openbibles-cli
```

## Usage
```
Usage: openbibles [options] <reference>

Options:

	-t, --translation <translation>	The Bible translation to use
	-o, --oneline 					Display all verses on one line
	--no-color 						Don't color output
	-h, --help 						output usage information
```

### Examples
```
openbibles "John 3:16"

// For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.

openbibles "John 3:14-16" -t asv

// 14 And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up; 
// 15 that whosoever believeth may in him have eternal life. 
// 16 For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life.

openbibles "Gen 1:1-2" -o

// 1 In the beginning God created the heaven and the earth. 2 And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.
```

