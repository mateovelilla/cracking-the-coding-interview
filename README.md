# cracking-the-coding-interview
Repository to practice examples of Cracking The Coding Interview but in Rust language

### Amortised Time
If you do an operation say a million time, you don't really care about the worse-case or the best-case of that operation - what you care about is how much
tiem is taken in total when you repeat the operation a million times.
So it doesn't matter if the operation is vbery slow once in a while, as long as "once in a while" is rare enough for the slowness to be diluted away. Essentially amortised time means
"average time taken per operation, if you do many operations". Amortised time doesn't have to be constants, you can have linear and logarithmic amortised time or whatever else.

Let's take mats' example of dynamic array, to which you repeatedly add new items. Normally adding an item takes constant time (that is, O(1)). But each time array is full, you allocate twice as much space,
copy your data into the new region, and free the old space. Assuming allocates and frees run in constant time, this enlargement process take O(n) time where n is the current size of the array.
So each time you enlarge, you take abouit twice as much time as the larst enlarge. But you've also waited twice as long before doing it! The cost of each enlargerment can thus be "spread out" amoung insertions.
this means that in the long term, the total time taken for adding m items to the array is O(m), and so the amortised time (i.e per insertion) is O(1)

## Space Complexity (Cap 6)

### [Rust](https://github.com/mateovelilla/cracking-the-coding-interview/tree/main/cap_6/Rust/space_complexity)
![Space Complexity In Rust](https://github.com/mateovelilla/cracking-the-coding-interview/blob/main/cap_6/Rust/space_complexity/chart.png?raw=true)

### Big O Complexity
![Big O Complexity](https://github.com/mateovelilla/cracking-the-coding-interview/blob/main/imgs/big-o-all.png?raw=true)