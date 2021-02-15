
# Goog calendar
```js
[['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00'],]
['9:00', '20:00']
[['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
['10:00', '18:30']
30
```

Ideas
- 2 cursors , one stops and waits
1) 10:30 - 12:00  => 11:30-12 => 1
11:30 - 12:30 
2) 13:00 - 16:00 => 15:00-16:00 =>2  
   15:00=16:00

Algo: 
1. Start with i cursor
    2. Walk to first interval 10:30-12:00#
    3. Check if fits 12:00-10:30=1:30>30
2. Run second cursor
    2. Walk to 11:30-12:30 
    3. Check if fits => yes
    4. Check if intersects 10:30-12:00 and 11:30-12:30 (max bottom and min top) => **11:30=12:00**/fits => 1
        if(cursorEbd)

# Reverse words
https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4