# Cohort Groups


Technologies: React components in a full-stack Rails app

Needs:
- Create breakout room names (form, own page), 13 rooms
  - One text field that can take a comma separated list and create individual entries to the db
  - Ex) Tiger Trail, Polar Bear Plunge, Elephant Odyssey, Ethiopian Highlands, Monkey Trails, Madagascar Forest, Reptile Mesa, River Hippo Habitat, Sun Bear Forest, Acacia Woodland, Absolutely Apes, Koalafornia, Aviary
  Ex) Wonderland, The Hundred Acre Woods, Neverland, Mount Olympus, Cave of Wonders, Atlantis, Radiator Springs, Halloween Town, Monstropolis, Toontown, Te Fiti, Zootopia
  - Can enter all rooms ahead of time and select room names
- Add students
  - One comma separated list to enter students initially
  - Check boxes to remove students who are not present
  - Create random groups
- Edit groups
- History (page)
  - Store previous groups



Grouping DB structure

Group
cohort_name:string week:string topic:string

Members
breakout_room:string students:array, group_id:integer
