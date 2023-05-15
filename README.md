# Nine Dot Problem


## Time Spent
~20 hours

## Biggest Challenge
Implementing the win condition, where dots that haven't been clicked must also be
marked as covered if a line has passed through them.

## Key Decision
Probably using SVG as the main graphics component, since everything revolves around
the grid and interacting with it. Canvas was an alternative as well as more niche 
ways to do it. the clicking and connecting dot interface could've been replaced with
a line snapping mechanism but would've required the use of more obscure libaries.

## Next Steps
- I wasn't able to add the multiplayer function in terms of multiple players working 
on the same file, so incorporating that would be top priority. 
- Ending the game as soon as a grid is completed.
- resetting the grid if the 4 lines used have not covered the grid. Currently refreshing 
the browser has the same effect.
- add chat feature, wasn't highlighted as important in the instructions but might help in
multiplayer.
- add more styling since I mostly relied on the default styling.
