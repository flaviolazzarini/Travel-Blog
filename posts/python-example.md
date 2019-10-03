---
title: Python Example
excerpt: >-
  Python is an interpreted, high-level, general-purpose programming language.
  Created by Guido van Rossum and first released in 1991, Python's design
  philosophy emphasizes code readability with its notable use of significant
  whitespace. Its language constructs and object-oriented approach aim to help
  programmers write clear, logical code for small and large-scale projects.
destination: Rotkreuz
date: 2019-10-03T08:02:53.658Z
image: /uploads/python.jpg
---
```python

# Python program to print all prime number in an interval 
  
start = 11
end = 25
  
for val in range(start, end + 1): 
      
   # If num is divisible by any number between 2 and val, it is not prime  
   if val > 1: 
       for n in range(2, val): 
           if (val % n) == 0: 
               break
       else: 
           print(val) 
```
